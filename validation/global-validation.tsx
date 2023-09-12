const checkFormData = async (request: Request) => {
  try {
    const form = await request.formData();
    return form;
  } catch (e) {
    return null;
  }
};

export default {
  checkFormData,
};
