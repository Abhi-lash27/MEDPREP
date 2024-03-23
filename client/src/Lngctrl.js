import i18next from "i18next";
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
i18next
.use(LanguageDetector)
.use(initReactI18next)
.init(
   
    {   debug:true,
        fallbackLng:'en',
        resources:{
         en:
         {
            translation:{
                key:'Hello',
                info:'Responsibilities for nurses',
                h1:`1.Record medical history and symptoms`,
                res1:`Nurses record and maintain accurate documentation of their patients' health to ensure they receive the proper treatment. Most nurses begin this process by asking patients questions about their medical history to gather information about previous diagnoses and surgeries, current medications, allergies and relevant family medical information. They may also ask the patient questions about any symptoms they are currently experiencing and record their vitals.
                If the patient receives a new diagnosis, medication or treatment plan during their visit, a nurse may be responsible for updating their medical record with this information. Maintaining detailed and accurate medical records is critical for ensuring patients receive the best possible care`,
                nurse:'Nurse Home Page',


               //  patient
               //info
                Name:'Name',
                Age:"Age",
                Gender:"Gender",
                Email:"Email",
                BloodGroup:"Blood Group",

                RecentlyAccessedFiles:"Recently Accessed Files",


               //book
               book:'Book Appointment',
               PhoneNumber: "Phone Number",
               ReasonForAppointment:' Reason For Appointment',
               PreviousAppointment:'Previous Appointment',
               SelectDate:'Select Date',
               ScheduleTime:'Schedule Time',
               SelectSpecialist: 'Select Specialist ',
               Date:'Date',
               Time:'Time',
               Doctor:'Doctor',
               Reason:'Reason',

               PatientDetails:'PatientDetails',
               patientinfo:'patientinfo',
               patientId:' patientId',
               Name:'Name',
               PhoneNumber:'PhoneNumber',
               email:'e-mail',
               DOB:'Date of Birt',
               Age:'age',
               BloodGroup:'Blood Group', 
               AadharID:'Identifiant Aadhar',
               LookingforaSpeacialist:'Looking for a Speacialist',
               Noprescriptionfound:' No prescription found',
               Prescription:'Prescription',
               BookYourAppointment:'BookYourAppointment',
               Experience:'Experience',
               Dr:'Doctor',
               years:'years',
               BookAppointment:'Book Appointment',

               //prev
               //report

               //pres


               //doc-appointment
               Status:'Status',
               Actions:'Actions',
               Approve:"Approve",
               Reject:'Reject',
               Report:'Report',
               Prescription:'Prescription',
               Reports:'Reports',
               Prescriptions:'Prescriptions',
               //doc-accountsettings
               Phone:'Phone',
               
               
               //change Password
               change:'Change Password',
               old:"Old Password",
               newpass:"New Password",
               confirm:"Confirm Password",
               save:"Save Changes",

            }
         },
         tn:
         {
            translation:{
               key:'வ ண க் க ம்' ,
               info:'மருத்துவத் தொழில்கள்',
               h1:` 1.மருத்துவ வரலாறு மற்றும் அறிகுறிகளை பதிவு செய்யவும்`,
               res1: `மருத்துவர்கள் தங்கள் உறவினர்களின் ஆரோக்கியத்தை சரியாக பதிவு செய்ய மற்றும் பராமரிக்க வேண்டும். பல மருத்துவர்கள் இந்த செயல்பாட்டை தொடங்கும் போது உறவினர்களுக்கு முன்னர் வரையறுக்கப்பட்ட அடிகளையும் அறிகுறிகளையும், தற்காலிகமாக பயன்பாடுகளையும், அல்லது தொடர்ந்த குடும்ப மருத்துவ தகவல்களை அறிய விரும்புகின்றனர். அவர்கள் தானாக்கிய வலிமையான மருத்துவ பதிவுகளை பரப்பவும் சரியான மருத்துவ 
               பராமரிப்புகளுக்கு மிகவும் முக்கியமாகும். உறவினர் தங்கள் வருகையில் புதிய அடிகள், மருந்து அல்லது சிகிச்சை திட்டத்தைப் பெறுவதன் மூலம் உறவினருக்கு புதிய அறிகுறிகளை பதிவு செய்ய முடியும். விரிவான மற்றும் சரியான மருத்துவ பதிவுகளை பரப்புவது உறவினர்களுக்கு சிறந்த முக்கியமானது.`,
               nurse:'செவிலியர்  முகப்பு',

               //  patient
               //info
               Name:'பெயர்',
               book:'பதிவு செய்யவும்',
               Age:'வயது',
               Gender:'பாலினம்',
               Email:'மின்னஞ்சல்',
               BloodGroup:'இரத்தக் குழு',

               RecentlyAccessedFiles:'சமீபத்தில் அணுகப்பட்ட கோப்புகள்',

               //book
               Phone:'தொலைபேசி எண்',
               PhoneNumber:"தொலைபேசி எண்",
               SelectDate:'தேதியை தேர்வுசெய்யவும்',
               ScheduleTime:'கால அட்டவணை நேரம்',
               ReasonForAppointment:'பரிசோதனைக்காண காரணம் ',
               PreviousAppointment: "முந்தைய நியமனம்",
               SelectSpecialist: "நிபுணரை தேர்வு செய்யவும்",
              //prev
              Date:'தேதி',
              Time:"நேரம்",
              Reason:"காரணம்",
              Doctor:'மருத்துவர்',

              PatientDetails:'நோயாளி விவரங்கள்',
               patientinfo:'நோயாளி தகவல்',
               patientId:'நோயாளி ஐடி',
               Name:'பெயர்',
               PhoneNumber:'தொலைபேசி எண்',
               email:'மின்னஞ்சல்',
               DOB:'பிறந்த தேதி',
               Age:'வயது',
               BloodGroup:'இரத்த வகை', 
               AadharID:'ஆதார் ஐடி',
               LookingforaSpeacialist:'நிபுணரைத் தேடுகிறது',
               Noprescriptionfound:'மருந்துச் சீட்டு எதுவும் கிடைக்கவில்லை',
               Prescription:'மருந்துச்சீட்டு',
               BookYourAppointment:'உங்கள் சந்திப்பை பதிவு செய்யவும்',
               Experience:'அனுபவம்',
               Dr:'மருத்துவர்',
               years:'ஆண்டுகள்',
               BookAppointment:'புத்தக நியமனம்',

              
              

               //report

               //pres


               //doc-appointment
               Status:'நிலை',
               Actions:'நடவடிக்கை',
               Approve:'ஏற்றுக்கொள்',
               Reject:'நிராகரிக்கவும்',
               Accepted:'',
               Rejected:'',
               Report:'அறிக்கை',
               Reports:'அறிக்கைகள்',
               Prescription:'மருந்துச்சீட்டு',
               Prescriptions:'மருந்துச்சீட்டுகள்',

               //doctor-accountsettings
               Specialization:'',
               join:'நிறுவனத்தில் சேர்ந்த தேதி',
               Experience:'அனுபவங்கள்',
               info:'உங்கள் விவரங்கள்',
               
                //change Password
                change:'கடவுச்சொல்லை மாற்று',
                old:"பழைய கடவுச்சொல்",
                newpass:"புதிய கடவுச்சொல்",
                confirm:"கடவுச்சொல்லை உறுதிப்படுத்தவும்",
                save:"மாற்றங்களைச் சேமிக்கவும்",

            }
         },
         fr:{
            translation:{
            info:'Responsabilités des infirmières',
            h1:`1. Enregistrer l'historique médical et les symptômes.`,
            res1:`Les infirmières enregistrent et maintiennent une documentation précise de la santé de leurs patients pour garantir qu'ils reçoivent le traitement approprié. La plupart des infirmières commencent ce processus en posant des questions aux patients sur leur historique médical afin de recueillir des informations sur les diagnostics précédents, les interventions 
            chirurgicales, les médicaments actuels, les allergies et les informations médicales familiales pertinentes. Elles peuvent également interroger le patient sur les symptômes qu'il ressent actuellement et enregistrer leurs signes vitaux.
            Si le patient reçoit un nouveau diagnostic, un nouveau médicament ou un plan de traitement lors de sa visite, une infirmière peut être responsable de mettre à jour son dossier médical avec ces informations. Maintenir des dossiers médicaux détaillés et précis est essentiel pour garantir que les patients reçoivent les meilleurs soins possibles.`,
            nurse:`Page d'accueil des infirmières`,


            //  patient
            //info
            Name:'nom',
            Age:'Âge',
            Gender:'Genre',
            Email:'E-mail',
            BloodGroup:"Groupe sanguin",
            PhoneNumber:'Numéro de téléphone',
            
            RecentlyAccessedFiles:'Fichier récemment consulté',


            //book
            book:"Prendre rendez-vous",
            PhoneNumber: "Numéro de téléphone",
            ReasonForAppointment:' Raison de la nomination',
            PreviousAppointment:'Previous Appointment',
            SelectDate:'Sélectionner une date',
            ScheduleTime:"Horaire de rendez-vous",
            SelectSpecialist: 'Sélectionnez un spécialiste :',
              //prev
               //prev
               PreviousAppointment:'rendez-vous précédent',
               Date:'Sélectionner la date',
               Time:'temps',
               Doctor:'médecin',
               Reason:'raison',
              

               PatientDetails:'Détails du patient',
               patientinfo:'Informations sur les patients',
               patientId:'Identifiant du patient',
               Name:'nom',
               PhoneNumber:'numéro de téléphone',
               email:'e-mail',
               DOB:'date de naissance',
               Age:'âge',
               BloodGroup:'groupe sanguin', 
               AadharID:'Identifiant Aadhar',
               LookingforaSpeacialist:'Vous cherchez un spécialiste',
               Noprescriptionfound:'Aucune ordonnance trouvée',
               Prescription:'Ordonnance',
               BookYourAppointment:'Prenez votre rendez-vous',
               Experience:'Expérience',
               Dr:'médecin',
               years:'années',
               BookAppointment:'Prendre rendez-vous',
               



               


           

               





               //report

               //pres

               //doc-appointment
               Status:'Statut',
               Actions:'Actions',
               Approve:"Approuver",
               Reject:'Rejeter',
               Report:'Rapport',
               Prescription:'ordonnance',
               Reports:'Rapports',
               Prescriptions:'ordonnances',


            }
         },
         hi:{
            translation:{
            info:'Responsabilités des infirmières',
            h1:`1. Enregistrer l'historique médical et les symptômes.`,
            res1:`Les infirmières enregistrent et maintiennent une documentation précise de la santé de leurs patients pour garantir qu'ils reçoivent le traitement approprié. La plupart des infirmières commencent ce processus en posant des questions aux patients sur leur historique médical afin de recueillir des informations sur les diagnostics précédents, les interventions 
            chirurgicales, les médicaments actuels, les allergies et les informations médicales familiales pertinentes. Elles peuvent également interroger le patient sur les symptômes qu'il ressent actuellement et enregistrer leurs signes vitaux.
            Si le patient reçoit un nouveau diagnostic, un nouveau médicament ou un plan de traitement lors de sa visite, une infirmière peut être responsable de mettre à jour son dossier médical avec ces informations. Maintenir des dossiers médicaux détaillés et précis est essentiel pour garantir que les patients reçoivent les meilleurs soins possibles.`,
            nurse:`Page d'accueil des infirmières`,


            //  patient
            //info
            Name:'नाम',

            Age:'आयु',
            Gender:'लिंग',
            Email:'ईमेल',
            BloodGroup:"रक्त समूह",
            Phone:'फ़ोन नंबर',
            PhoneNumber:'फ़ोन नंबर',

            RecentlyAccessedFiles:'हाल ही में एक्सेस की गई फ़ाइल',


            
            //book
            book:"निर्धारित तारीख बुक करना",
            //PhoneNumber: "Numéro de téléphone",
             ReasonForAppointment:'नियुक्ति का कारण',
             PreviousAppointment:'Previous Appointment',
             SelectDate:'तारीख़ चुनें',
             ScheduleTime:"अनुसूचित समय",
             SelectSpecialist: 'विशेषज्ञ का चयन करें',

               //prev
               PreviousAppointment:'पिछली नियुक्ति',
               Date:'तारीख',
               Time:'समय',
               Doctor:'चिकित्सक',
               Reason:'कारण',




               //report

               //pres

               //doctor-appointment
               Status:'स्थिति',
               Actions:'कार्रवाई',
               Approve:'मंज़ूरी देना',
               Reject:'अस्वीकार करना',
               Accepted:'',
               Rejected:'',
               Report:'प्रतिवेदन',
               Reports:'रिपोर्टों',
               Prescription:'नुस्खा',
               Prescriptions:'नुस्खे',

               //doctor-accountsettings
               Specialization:'विशेषज्ञता',
               join:'विशेषज्ञता',
               Experience:'अनुभव',
               info:'व्यक्तिगत जानकारी',


               //change Password
               change:'पासवर्ड बदलें',
               old:"पुराना पासवर्ड",
               newpass:"नया पासवर्ड",
               confirm:"पासवर्ड की पुष्टि कीजिये",
               save:"Save",
             
               

            }
         }
           
        }
    }
)