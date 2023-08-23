import { MutableRefObject, useEffect, useRef, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import useIntersectionObserver from "./useIntersectionObserver";
import useToken from "./useToken";
const api_backend = process.env.NEXT_PUBLIC_APP_API_BACKEND;

export function useFetchUmum<T = any>(
  //   jenisApi: any,
  link: string | null,
  refKomponen?: MutableRefObject<any>,
  denganToken = false
): any {
  // const dalamLayar = useCekDalamLayar(refKomponen);
  const dalamLayar = useIntersectionObserver(refKomponen!, {});
  const [dataJSON, setDataJSON] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [token] = useToken();
  const [error, setEror] = useState({
    error: false,
    message: "",
    responseCode: -1,
    data: null,
  });

  const reqSedangGetSebelumnya = useRef<CancelTokenSource | null>(null);
  const linkSebelumnya = useRef<string | null>(null);

  useEffect(() => {
    const apiTerpilih = api_backend;
    const benarDalamLayar = refKomponen === undefined || dalamLayar;
    const linkKosong = link === null || link === undefined;
    const linkTidakSama = linkSebelumnya.current !== link;

    const dataKosong = linkTidakSama || dataJSON === null;
    if (!benarDalamLayar || linkKosong || !dataKosong) return;
    const reqMicroservices = axios.CancelToken.source();

    reqSedangGetSebelumnya.current?.cancel();
    let cancelFetch = false;
    const fetch = async () => {
      setLoading(true);
      reqSedangGetSebelumnya.current = reqMicroservices;

      const hasilFetch = await fetchUmum(
        apiTerpilih,
        link,
        denganToken,
        token,
        reqMicroservices
      );
      if (cancelFetch) {
        return;
      }
      if (hasilFetch.success && hasilFetch.data) {
        setDataJSON(hasilFetch.data);
        setLoading(false);
      } else {
        setEror({
          error: true,
          message: hasilFetch.message,
          data: hasilFetch.data,
          responseCode: hasilFetch.responseCode,
        });
        setDataJSON(null);
      }
      linkSebelumnya.current = link;
      setLoading(false);
    };
    fetch();
    return () => {
      reqMicroservices.cancel();
      cancelFetch = true;
    };
  }, [link, dalamLayar, token]);

  return [dataJSON, loading, error];
}

export const fetchUmum = async (
  apiTerpilih: string | undefined,
  link: string,
  denganToken: boolean,
  token: string | null,
  reqCancelToken: any
) => {
  try {
    const response = await axios.get(`${apiTerpilih}${link}`, {
      headers:
        denganToken && token
          ? {
              Authorization: token,
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            }
          : {},
      cancelToken: reqCancelToken.token,
    });
    console.log(response, apiTerpilih, link);
    return {
      success: true,
      message: response?.data?.data?.message || "Error tidak diketahui",
      data: response.data,
      responseCode: response.status,
    };
  } catch (e) {
    return {
      success: false,
      message: "Error tidak diketahui",
      data: null,
      responseCode: 400,
    };
  }
};
