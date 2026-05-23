export const health = async (req, res) => {
  try {
    return res.json({
      msg: "OK",
    });
  } catch (error) {
    return res.json(error);
  }
};
