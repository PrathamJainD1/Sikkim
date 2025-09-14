import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      "Explore Sikkim": "Explore Sikkim",
      "Food": "Food",
      "Thukpa": "Thukpa",
      "Momos": "Momos",
      "Chhurpi": "Chhurpi",
      "Culture": "Culture",
      "Festivals": "Festivals",
      "Dance": "Dance",
      "Art": "Art",
      "Monasteries": "Monasteries",
      "Rumtek": "Rumtek",
      "Pemayangtse": "Pemayangtse",
      "Tashiding": "Tashiding",
      "360° View": "360° View",
      "Rumtek 360": "Rumtek 360",
      "Pemayangtse 360": "Pemayangtse 360",
      "Tashiding 360": "Tashiding 360",
      "Travel Routes": "Travel Routes",
      "Gangtok Route": "Gangtok Route",
      "Pelling Route": "Pelling Route",
      "North Sikkim Route": "North Sikkim Route",
      "Booking / Participation": "Booking / Participation",
      "Book a Tour": "Book a Tour",
      "Participate in Events": "Participate in Events",
      "Sikkim: Land of Monasteries, Mountains & Culture": "Sikkim: Land of Monasteries, Mountains & Culture",
      "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.": "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.",
      "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.": "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.",
      "Cultural Calendar": "Cultural Calendar",
      "Sikkim hosts numerous festivals throughout the year, including Losar, Bumchu, and Saga Dawa, celebrating its rich Buddhist culture. These festivals give tourists a glimpse into the local traditions, rituals, and vibrant performances.": "Sikkim hosts numerous festivals throughout the year, including Losar, Bumchu, and Saga Dawa, celebrating its rich Buddhist culture. These festivals give tourists a glimpse into the local traditions, rituals, and vibrant performances.",
      "Why Choose Sikkim": "Why Choose Sikkim",
      "Sikkim offers pristine landscapes, rich biodiversity, adventure sports, and a peaceful environment, making it a top choice for travelers. The blend of natural beauty and cultural heritage ensures a unique and memorable experience.": "Sikkim offers pristine landscapes, rich biodiversity, adventure sports, and a peaceful environment, making it a top choice for travelers. The blend of natural beauty and cultural heritage ensures a unique and memorable experience.",
      "Problems This Website Solves": "Problems This Website Solves",
      "Many tourists lack reliable information about Sikkim’s cultural heritage and must rely on scattered sources to plan their trips.": "Many tourists lack reliable information about Sikkim’s cultural heritage and must rely on scattered sources to plan their trips.",
      "Planning a trip can be challenging due to insufficient details about travel costs, accommodations, and festival timings. This website aims to centralize all essential information for an easier, stress-free experience.": "Planning a trip can be challenging due to insufficient details about travel costs, accommodations, and festival timings. This website aims to centralize all essential information for an easier, stress-free experience."
    }
  },
  hi: {
    translation: {
      "Explore Sikkim": "सिक्किम एक्सप्लोर करें",
      "Food": "भोजन",
      "Thukpa": "थुक्पा",
      "Momos": "मोमोज़",
      "Chhurpi": "छुर्पी",
      "Culture": "संस्कृति",
      "Festivals": "त्योहार",
      "Dance": "नृत्य",
      "Art": "कला",
      "Monasteries": "मठ",
      "Rumtek": "रुमटेक",
      "Pemayangtse": "पेमा यांगट्से",
      "Tashiding": "तशिदिंग",
      "360° View": "360° दृश्य",
      "Rumtek 360": "रुमटेक 360",
      "Pemayangtse 360": "पेमा यांगट्से 360",
      "Tashiding 360": "तशिदिंग 360",
      "Travel Routes": "यात्रा मार्ग",
      "Gangtok Route": "गंगटोक मार्ग",
      "Pelling Route": "पेल्लिंग मार्ग",
      "North Sikkim Route": "उत्तरी सिक्किम मार्ग",
      "Booking / Participation": "बुकिंग / भागीदारी",
      "Book a Tour": "टूर बुक करें",
      "Participate in Events": "कार्यक्रमों में भाग लें",
      "Sikkim: Land of Monasteries, Mountains & Culture": "सिक्किम: मठों, पर्वतों और संस्कृति की भूमि",
      "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.": "महान हिमालय की गोद में स्थित, सिक्किम भारत का प्राकृतिक सौंदर्य और सांस्कृतिक समृद्धि का छिपा रत्न है। कंचनजंगा जैसे बर्फ से ढके पर्वत, जीवंत बौद्ध मठ और गर्मजोशी भरी आतिथ्यता के लिए जाना जाता है।",
      "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.": "सघन घाटियों और अल्पाइन मैदानों से लेकर पारंपरिक त्योहारों और विविध व्यंजनों तक, सिक्किम का हर कोना प्रकृति और संस्कृति के बीच सामंजस्य की कहानी कहता है।",
      "Cultural Calendar": "सांस्कृतिक कैलेंडर",
      "Sikkim hosts numerous festivals throughout the year, including Losar, Bumchu, and Saga Dawa, celebrating its rich Buddhist culture. These festivals give tourists a glimpse into the local traditions, rituals, and vibrant performances.": "सिक्किम पूरे वर्ष कई त्योहारों की मेजबानी करता है, जिनमें लोसार, बुमचू और सागा डावा शामिल हैं, जो इसकी समृद्ध बौद्ध संस्कृति का जश्न मनाते हैं।",
      "Why Choose Sikkim": "सिक्किम क्यों चुनें",
      "Sikkim offers pristine landscapes, rich biodiversity, adventure sports, and a peaceful environment, making it a top choice for travelers. The blend of natural beauty and cultural heritage ensures a unique and memorable experience.": "सिक्किम अद्वितीय प्राकृतिक दृश्य, जैव विविधता, साहसिक खेल और शांत वातावरण प्रदान करता है, जो इसे यात्रियों के लिए शीर्ष विकल्प बनाता है।",
      "Problems This Website Solves": "इस वेबसाइट द्वारा हल किए गए समस्याएं",
      "Many tourists lack reliable information about Sikkim’s cultural heritage and must rely on scattered sources to plan their trips.": "कई पर्यटकों के पास सिक्किम की सांस्कृतिक विरासत के बारे में विश्वसनीय जानकारी नहीं होती और उन्हें यात्रा की योजना बनाने के लिए बिखरे स्रोतों पर निर्भर रहना पड़ता है।",
      "Planning a trip can be challenging due to insufficient details about travel costs, accommodations, and festival timings. This website aims to centralize all essential information for an easier, stress-free experience.": "यात्रा लागत, आवास और त्योहारों के समय के बारे में अपर्याप्त जानकारी के कारण यात्रा की योजना बनाना चुनौतीपूर्ण हो सकता है। यह वेबसाइट सभी आवश्यक जानकारी को केंद्रीकृत करने का उद्देश्य रखती है।"
    }
  },
  mr: {
    translation: {
      "Explore Sikkim": "सिक्कीम एक्सप्लोर करा",
      "Food": "अन्न",
      "Thukpa": "थुक्पा",
      "Momos": "मोमोज",
      "Chhurpi": "छुरपी",
      "Culture": "संस्कृती",
      "Festivals": "सण",
      "Dance": "नृत्य",
      "Art": "कला",
      "Monasteries": "मठ",
      "Rumtek": "रुमटेक",
      "Pemayangtse": "पेमायांगट्से",
      "Tashiding": "तशिदिंग",
      "360° View": "360° दृश्य",
      "Rumtek 360": "रुमटेक 360",
      "Pemayangtse 360": "पेमायांगट्से 360",
      "Tashiding 360": "तशिदिंग 360",
      "Travel Routes": "प्रवास मार्ग",
      "Gangtok Route": "गंगटोक मार्ग",
      "Pelling Route": "पेलिंग मार्ग",
      "North Sikkim Route": "उत्तरेकडील सिक्कीम मार्ग",
      "Booking / Participation": "बुकिंग / सहभागिता",
      "Book a Tour": "भ्रमण आरक्षित करा",
      "Participate in Events": "कार्यक्रमांमध्ये सहभागी व्हा",
      "Sikkim: Land of Monasteries, Mountains & Culture": "सिक्कीम: मठ, पर्वत आणि संस्कृतीची भूमि",
      "Nestled in the lap of the majestic Himalayas, Sikkim is India’s hidden gem of natural beauty and cultural richness. Known for its snow-capped peaks like Kanchenjunga, vibrant Buddhist monasteries, and warm hospitality, Sikkim offers travelers a perfect blend of adventure and tranquility.": "महान हिमालयाच्या कुशीत वसलेले, सिक्कीम हे भारताचे नैसर्गिक सौंदर्य आणि सांस्कृतिक संपत्तीचे लपलेले रत्न आहे. कंचनजंगा सारखी बर्फाळ शिखरे, जीवंत बौद्ध मठ आणि उबदार पाहुणचारासाठी ओळखले जाते.",
      "From lush valleys and alpine meadows to traditional festivals and diverse cuisines, every corner of Sikkim tells a story of harmony between nature and culture. Whether you seek spiritual peace, thrilling treks, or just breathtaking views, Sikkim promises an unforgettable journey.": "घनदाट दऱ्या आणि अल्पाइन मेadows पासून पारंपरिक सण आणि विविध जेवणांपर्यंत, सिक्कीमचा प्रत्येक कोपरा निसर्ग आणि संस्कृतीतील सुसंवादाची कहाणी सांगतो.",
      "Cultural Calendar": "सांस्कृतिक कॅलेंडर",
      "Sikkim hosts numerous festivals throughout the year, including Losar, Bumchu, and Saga Dawa, celebrating its rich Buddhist culture. These festivals give tourists a glimpse into the local traditions, rituals, and vibrant performances.": "सिक्कीम संपूर्ण वर्षभर अनेक सणांचे आयोजन करतो, ज्यात लोसार, बुमचू, आणि सागा डावा यांचा समावेश आहे, हे त्याच्या समृद्ध बौद्ध संस्कृतीचे साजरे करतात.",
      "Why Choose Sikkim": "सिक्कीम का निवडावे",
      "Sikkim offers pristine landscapes, rich biodiversity, adventure sports, and a peaceful environment, making it a top choice for travelers. The blend of natural beauty and cultural heritage ensures a unique and memorable experience.": "सिक्कीम नैसर्गिक सौंदर्य, समृद्ध जैवविविधता, साहसिक खेळ आणि शांत वातावरण प्रदान करतो, ज्यामुळे तो प्रवाशांसाठी सर्वोत्तम पर्याय ठरतो.",
      "Problems This Website Solves": "ही वेबसाईट सोडवणाऱ्या समस्या",
      "Many tourists lack reliable information about Sikkim’s cultural heritage and must rely on scattered sources to plan their trips.": "अनेक पर्यटकांकडे सिक्कीमच्या सांस्कृतिक वारशाबद्दल विश्वासार्ह माहिती नसते आणि त्यांना प्रवासाची योजना आखण्यासाठी वेगवेगळ्या स्रोतांवर अवलंबून राहावे लागते.",
      "Planning a trip can be challenging due to insufficient details about travel costs, accommodations, and festival timings. This website aims to centralize all essential information for an easier, stress-free experience.": "प्रवास खर्च, निवासस्थान आणि सणांच्या वेळापत्रकाबद्दल अपर्याप्त माहितीमुळे प्रवासाची योजना आखणे आव्हानात्मक ठरू शकते. ही वेबसाईट सर्व आवश्यक माहिती केंद्रीत करण्याचा उद्देश ठेवते."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
