import { Router } from "express";

import { upload } from "./modules/multer";

import { getAllAdmin, getSingleAdmin, updateAdmin, deleteAdmin } from "./handlers/admin";
import {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
  updateDoctorPassword
} from "./handlers/doctor";
import {
  createNurse,
  getAllNurse,
  getSingleNurse,
  updateNurse,
  deleteNurse,
  updateNursePassword
} from "./handlers/nurse";
import {
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
  updatePatientPassword
} from "./handlers/patient";
import {
  createAppointments,
  getAllAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment
} from "./handlers/appointments";
import {
  createPrescriptions,
  getAllPrescriptions,
  getSinglePrescription,
  updatePrescription,
  deletePrescription
} from "./handlers/prescription";
import { getFileById, uploadFile, updateFile } from "./handlers/file";
import { createReport, getReportsByPatientId, updateReport, deleteReport } from "./handlers/reports";

const router = Router();

// TODO: ADMIN HANDLERS
router.get("/admins", getAllAdmin);
router.get("/admins/:id", getSingleAdmin);
router.put("/admins/:id", updateAdmin);
router.delete("/admins/:id", deleteAdmin);

// TODO: PATIENTS HANDLERS
router.get("/patients", getAllPatients);
router.get("/patients/:id", getSinglePatient);
router.put("/patients/:id", updatePatient);
router.put('/patients/password/:id', updatePatientPassword)
router.delete("/patients/:id", deletePatient);

// TODO: NURSE HANDLERS
router.get("/nurses", getAllNurse);
router.get("/nurses/:id", getSingleNurse);
router.post("/nurses", createNurse);
router.put("/nurses/:id", updateNurse);
router.put("/nurses/password/:id", updateNursePassword);
router.delete("/nurses/:id", deleteNurse);

// TODO: DOCTOR HANDLERS
router.get("/doctors", getAllDoctor);
router.get("/doctors/:id", getSingleDoctor);
router.post("/doctors", createDoctor);
router.put("/doctors/:id", updateDoctor);
router.put("/doctors/password/:id", updateDoctorPassword);
router.delete("/doctors/:id", deleteDoctor);


// TODO: APPOINTMENTS HANDLERS
router.get("/appointments", getAllAppointments);
router.get("/appointments/:id", getSingleAppointment);
router.post("/appointments", createAppointments);
router.put("/appointments/:id", updateAppointment);
router.delete("/appointments/:id", deleteAppointment);

// TODO: PRESCRIPTION HANDLERS
router.get("/patients/:id/prescriptions", getAllPrescriptions);
router.get("/prescriptions/:id", getSinglePrescription);
router.post("/prescriptions", createPrescriptions);
router.put("/prescriptions/:id", updatePrescription);
router.delete("/prescriptions/:id", deletePrescription);

// TODO: REPORTS HANDLERS
router.get("/reports/:id", getReportsByPatientId);
router.post("/reports", createReport);
router.put("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);

// TODO: FILE HANDLERS
router.get("/files/:id", getFileById);
router.post("/files", upload.single("data"), uploadFile);
router.put("/files/:id", upload.single("data"), updateFile);

export default router;