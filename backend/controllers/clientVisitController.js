import ClientVisit from "../models/clientVisitModel.js";

export const createdVisits = async (req, res) => {
  const clients = await ClientVisit.find();
  return res.status(200).json(clients);
};
export const clientRegister = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    purpose,
    createdDate,
    time,
    location,
    photo,
    accessories,
    to,
    company,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !purpose ||
    !location ||
    !to ||
    !company
  )
    return res.status(400).json({ error: "All the  fields are required" });
  const newClient = await ClientVisit.create({
    firstName,
    lastName,
    email,
    phone,
    purpose,
    createdDate,
    time,
    location,
    photo,
    accessories,
    to,
    createdBy: req.user,
    company,
  });
  console.log(newClient);
  return res.status(201).json("visit created successfully");
};
