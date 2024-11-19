export const internalError = (e, res) => {
    console.error(e);
    res.status(500).json({ message: "Internal Sever Error" });
};
