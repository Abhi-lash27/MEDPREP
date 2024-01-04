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


               //book
               book:'Book Appointment',
               PhoneNumber: "Phone Number",

               //prev
               PreviousAppointment:'Previous Appointment',

               //report

               //pres

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
               book:'இப்போது பதிவு செய்யவும்',

               //book
               PhoneNumber:"தொலைபேசி எண்",

               //prev
               PreviousAppointment: "முந்தைய நியமனம்",

               //report

               //pres
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
            Name:'nom'

            //book

               //prev

               //report

               //pres


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
            Name:'नाम'
            
            //book

               //prev

               //report

               //pres
            }
         }
        }
    }
)