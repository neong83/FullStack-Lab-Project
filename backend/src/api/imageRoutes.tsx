import { Router } from "express";

const router = Router();

router.get("/:name", async (req, res) => {
  const { getMediaPath } = await import("../media/loader");
  const { isFileExist } = await import("../base/validates");

  try {
    const imagePath = getMediaPath(`images/${req.params.name}`);

    isFileExist(imagePath, `${req.params.name} not Found`);
    res.status(200).sendFile(imagePath);
  } catch (error) {
    res
      .status(400)
      .json({ error: "File does not exist", message: error.message });
  }
});

export { router };
