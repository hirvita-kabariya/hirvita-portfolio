import{useState,useRef,useEffect}from"react";
import profilePhoto from"./assets/photo.png";
const C={bg:"#F4F6F7",bg2:"#EDF0F2",card:"#FFF",border:"#DCE3E6",rose:"#5EAEAE",roseLight:"#E4F2F2",roseMid:"#9FD0D0",roseDark:"#3D8A8A",blue:"#4A6B7A",blueLight:"#E6EDF0",grad1:"linear-gradient(135deg,#5EAEAE,#4A6B7A)",heading:"#1E2D35",text:"#4A5C66",muted:"#7A909A",subtle:"#B0BFC6"};
const proj=[
{t:"AI Knowledge Management",d:"RAG architecture with FAISS vector search for semantic document retrieval.",ld:"Processes thousands of documents with vector embeddings, citation tracking, and confidence scoring.",tags:["Python","LangChain","FAISS","GPT-4"],cat:"AI/ML",em:"🧠",cl:C.rose,gh:"https://github.com/hirvita-kabariya/ai-study-assistant"},
{t:"Sign Language Recognition",d:"Real-time ASL gesture recognition using OpenCV, MediaPipe and LSTM.",ld:"94% accuracy across 26 ASL signs at 30fps with bidirectional LSTM.",tags:["Python","OpenCV","MediaPipe","LSTM"],cat:"Deep Learning",em:"🤟",cl:C.blue,gh:"https://github.com/hirvita-kabariya/Sign-Language-Recognition"},
{t:"Nike Sales Dashboard",d:"Interactive Streamlit dashboard with KPIs, dynamic charts and filtering.",ld:"Visualizes sales across regions and product categories with actionable insights.",tags:["Python","Streamlit","Pandas"],cat:"Analytics",em:"📊",cl:C.rose,gh:"https://github.com/hirvita-kabariya/nike-dashboard"},
{t:"Market Data Services",d:"Production microservice with FastAPI, PostgreSQL, and Kafka streaming.",ld:"High-throughput market data ingestion with scalable architecture.",tags:["FastAPI","PostgreSQL","Kafka"],cat:"Data Eng",em:"📈",cl:C.blue,gh:"https://github.com/hirvita-kabariya/Market-data-services"},
{t:"LLM Judge for History",d:"Automated LLM pipeline for historical claim extraction and evaluation.",ld:"Extracts factual claims and evaluates consistency with prompt engineering.",tags:["Python","LLM","NLP"],cat:"AI/ML",em:"⚖️",cl:C.rose,gh:"https://github.com/hirvita-kabariya/LLM-Judge-for-Historical-Consistency-Analysis"},
{t:"OTP Verification System",d:"SMS-based OTP delivery with callback handling for authentication.",ld:"Production-grade OTP generation, expiration, and verification.",tags:["Python","SMS API","Backend"],cat:"Backend",em:"🔐",cl:C.blue,gh:"https://github.com/hirvita-kabariya/otp_system"},
];
const sk=[
{nm:"Languages",ic:"💻",items:[
{n:"Python",c:"#3776AB",v:'<path d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7l0 2.7h5.8v.8H3.9S0 5.8 0 12s3.4 6 3.4 6h2v-2.9s-.1-3.4 3.4-3.4h5.8s3.2 0 3.2-3.1V3.2S18.3 0 11.9 0zM8.7 1.9c.6 0 1 .5 1 1s-.4 1-1 1-.9-.5-.9-1 .4-1 .9-1z" fill="#3776AB"/><path d="M12.1 24c6.1 0 5.7-2.7 5.7-2.7v-2.7h-5.8v-.8h8.1s3.9.4 3.9-5.7-3.4-6-3.4-6h-2v2.9s.1 3.4-3.4 3.4H9.5s-3.2 0-3.2 3.1v5.3S5.7 24 12.1 24zm3.2-1.9c-.6 0-1-.5-1-1s.4-1 1-1 1 .5 1 1-.5 1-1 1z" fill="#FFD43B"/>'},
{n:"C++",c:"#00599C",v:'<path d="M22.4 6c-.2-.3-.4-.5-.7-.7L12.9.2c-.5-.3-1.3-.3-1.8 0L2.3 5.3C1.8 5.6 1.4 6.3 1.4 6.9v10.2c0 .3.1.6.3.9s.4.5.7.7l8.8 5.1c.5.3 1.3.3 1.8 0l8.8-5.1c.3-.1.5-.4.7-.7s.3-.6.3-.9V6.9c0-.3-.1-.6-.3-.9zM12 19.1c-3.9 0-7.1-3.2-7.1-7.1S8.1 4.9 12 4.9c2.5 0 4.7 1.3 6.2 3.6l-3.1 1.8c-.7-1.1-1.8-1.8-3.1-1.8-2 0-3.6 1.6-3.6 3.6S10 15.6 12 15.6c1.3 0 2.4-.7 3.1-1.8l3.1 1.8c-1.5 2.2-3.7 3.5-6.2 3.5z" fill="#00599C"/>'},
{n:"SQL",c:"#E48E00",v:'<path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.5 8 3s-3.6 3-8 3-8-1.5-8-3 3.6-3 8-3zM4 18V9.3C5.8 10.4 8.8 11 12 11s6.2-.6 8-1.7V18c0 1.5-3.6 3-8 3s-8-1.5-8-3z" fill="#E48E00"/>'},
{n:"R",c:"#276DC3",v:'<path d="M12 2.4C6.2 2.4 1.5 6.1 1.5 10.6s4.7 8.2 10.5 8.2c1.8 0 3.5-.3 5-.9l3.5 3.7V17c1.5-1.6 2.5-3.8 2.5-6.4 0-4.5-4.7-8.2-11-8.2z" fill="#276DC3"/>'},
{n:"Java",c:"#ED8B00",v:'<path d="M8.9 18.6s-.9.5.6.7c1.9.2 2.9.2 5-.2 0 0 .6.3 1.3.6C11.1 21.7 5.2 19.5 8.9 18.6M13.1 11.5c1.2 1.3-.3 2.5-.3 2.5s2.9-1.5 1.6-3.4c-1.3-1.8-2.2-2.7 3-5.7 0 0-8.2 2.1-4.3 6.6" fill="#ED8B00"/><path d="M14.4 0s2.5 2.5-2.4 6.3C8.1 9.4 11.2 11.1 12 12.8c-2.3-2-3.9-3.9-2.8-5.5C10.8 5.2 15.4 4 14.4 0" fill="#ED8B00"/>'},
{n:"JavaScript",c:"#F7DF1E",v:'<rect width="24" height="24" rx="2" fill="#F7DF1E"/><path d="M6.4 19.2l1.7-1c.3.6.7 1 1.4 1s1.1-.3 1.1-1.2v-6.4h2.1v6.5c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-3.1-1.8zm7 0l1.7-1c.4.7 1 1.2 1.9 1.2s1.3-.4 1.3-1-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8s-.8.3-.8.7.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3s-1.3 2.6-3.1 2.6c-1.8 0-2.9-.8-3.4-1.9z" fill="#000"/>'},
{n:"TypeScript",c:"#3178C6",v:'<rect width="24" height="24" rx="2" fill="#3178C6"/><path d="M5.7 13.2h2v6.3h1.7v-6.3h2v-1.4H5.7v1.4zm8.6-1.4v7.7h1.6v-2.6h1.4c1.7 0 2.9-.9 2.9-2.6s-1.1-2.5-2.8-2.5h-3.1zm1.6 1.4h1.2c.9 0 1.4.4 1.4 1.1s-.5 1.2-1.4 1.2h-1.2v-2.3z" fill="#FFF"/>'},
{n:"Bash",c:"#4EAA25",v:'<path d="M4 20q-.8 0-1.4-.6Q2 18.8 2 18V6q0-.8.6-1.4Q3.2 4 4 4h16q.8 0 1.4.6Q22 5.2 22 6v12q0 .8-.6 1.4Q20.8 20 20 20zm0-2h16V8H4v10zm4-2h4v-1H8zm-1.5-2.5l3-3-3-3-1 1 2 2-2 2z" fill="#4EAA25"/>'},
]},
{nm:"Frameworks",ic:"⚙️",items:[
{n:"FastAPI",c:"#009688",v:'<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-.6 21.6v-7.5H7.2L13.2 2.4v7.5h4L11.4 21.6z" fill="#009688"/>'},
{n:"Flask",c:"#333",v:'<path d="M12 2L6 12h3l-3 8 9-10h-3l3-8z" fill="#333"/>'},
{n:"Django",c:"#092E20",v:'<path d="M11.1 0h3.9v18.2c-2 .4-3.5.5-5.1.5-4.8 0-7.3-2.2-7.3-6.3 0-4 2.7-6.6 6.8-6.6.6 0 1.1 0 1.7.2zm0 9.1c-.4-.1-.9-.2-1.3-.2-2 0-3.1 1.2-3.1 3.4s1.1 3.2 3.1 3.2c.4 0 .7 0 1.3-.1z" fill="#092E20"/>'},
{n:"Streamlit",c:"#FF4B4B",v:'<path d="M12 2l10 17H2L12 2z" fill="#FF4B4B"/>'},
{n:"LangChain",c:"#1C3C3C",v:'<circle cx="8" cy="8" r="3" fill="#1C3C3C"/><circle cx="16" cy="8" r="3" fill="#1C3C3C"/><circle cx="12" cy="16" r="3" fill="#1C3C3C"/><line x1="8" y1="11" x2="12" y2="13" stroke="#1C3C3C" stroke-width="1.5"/><line x1="16" y1="11" x2="12" y2="13" stroke="#1C3C3C" stroke-width="1.5"/>'},
{n:"Spark",c:"#E25A1C",v:'<path d="M12 2L8 8l4 2-4 4 8-6-4-2 4-4z" fill="#E25A1C"/>'},
{n:"Airflow",c:"#017CEE",v:'<path d="M12 2L2 12l10 10 10-10L12 2zm0 3.4L18.6 12 12 18.6 5.4 12 12 5.4z" fill="#017CEE"/>'},
{n:"Pytest",c:"#0A9EDC",v:'<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15l-5-5 1.4-1.4L11 14.2l7.6-7.6L20 8l-9 9z" fill="#0A9EDC"/>'},
{n:"dbt",c:"#FF694B",v:'<rect x="6" y="6" width="12" height="12" rx="2" fill="#FF694B"/>'},
]},
{nm:"AI/ML Libraries",ic:"🧠",items:[
{n:"NumPy",c:"#4DABCF",v:'<path d="M10.3 4.9L7.1 3.2 3.8 4.9l3.2 1.6zm1.9 1l3.3-1.7-3.2-1.6-3.3 1.7zm-5.2 2.6L3.8 6.9v3.3L7 11.8zm10.4 0V5.2l-3.2 1.6v3.3zm-5.2 2.6L9 9.5v6.6l3.2 1.6zm1.9-1v6.6l3.2-1.6V9.5z" fill="#4DABCF"/>'},
{n:"Pandas",c:"#150458",v:'<path d="M16.9 0h2.6v5.9h-2.6zm0 7.9h2.6v8.2h-2.6zm0 10.2h2.6V24h-2.6zM4.5 5.9h2.6v5.9H4.5zm0 7.9h2.6V24H4.5zM4.5 0h2.6v3.9H4.5zm6.2 3.9h2.6v7.9h-2.6zm0 9.9h2.6V24h-2.6z" fill="#150458"/>'},
{n:"scikit-learn",c:"#F7931E",v:'<circle cx="12" cy="12" r="10" fill="#F7931E"/><path d="M10 17l-5-5 1.4-1.4L10 14.2l7.6-7.6L19 8l-9 9z" fill="#FFF"/>'},
{n:"Hugging Face",c:"#FFD21E",v:'<circle cx="12" cy="12" r="10" fill="#FFD21E"/><circle cx="8.5" cy="10" r="1.5" fill="#333"/><circle cx="15.5" cy="10" r="1.5" fill="#333"/><path d="M8 14.5s2 3 4 3 4-3 4-3" stroke="#333" stroke-width="1.5" fill="none"/>'},
{n:"PyTorch",c:"#EE4C2C",v:'<path d="M12 0L5 7.1a9.9 9.9 0 1014 0L17.5 8.6a7.9 7.9 0 11-11.2 0L10.5 4.4V7.5z" fill="#EE4C2C"/><circle cx="16" cy="5.5" r="1.5" fill="#EE4C2C"/>'},
{n:"TensorFlow",c:"#FF6F00",v:'<path d="M1.3 5.9L11.5 0v24l-4.1-2.4V7.6L4.4 9.4V5.9zm21.4 0L12.5 0v24l4.1-2.4V7.6l3.1 1.8V5.9z" fill="#FF6F00"/>'},
{n:"FAISS",c:"#3B5998",v:'<path d="M15.5 14h-.8l-.3-.3c1-1.1 1.5-2.6 1.5-4.2C16 5.9 13.1 3 9.5 3S3 5.9 3 9.5 5.9 16 9.5 16c1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5L20.5 19l-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z" fill="#3B5998"/>'},
{n:"Matplotlib",c:"#11557C",v:'<path d="M2 20V4h1v15h19v1H2zm3-3V9h2v8H5zm4 0V6h2v11H9zm4 0V8h2v9h-2zm4 0V4h2v13h-2z" fill="#11557C"/>'},
{n:"spaCy",c:"#09A3D5",v:'<circle cx="12" cy="12" r="10" fill="#09A3D5"/><circle cx="12" cy="12" r="4" fill="#fff"/>'},
]},
{nm:"Databases",ic:"🗄️",items:[
{n:"MySQL",c:"#4479A1",v:'<path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.5 8 3s-3.6 3-8 3-8-1.5-8-3 3.6-3 8-3zM4 18V9.3C5.8 10.4 8.8 11 12 11s6.2-.6 8-1.7V18c0 1.5-3.6 3-8 3s-8-1.5-8-3z" fill="#4479A1"/>'},
{n:"PostgreSQL",c:"#336791",v:'<path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm8 16c0 1.5-3.6 3-8 3s-8-1.5-8-3v-2.7C5.8 16.4 8.8 17 12 17s6.2-.6 8-1.7V18zm0-5c0 1.5-3.6 3-8 3s-8-1.5-8-3V9.3C5.8 10.4 8.8 11 12 11s6.2-.6 8-1.7V13z" fill="#336791"/>'},
{n:"MongoDB",c:"#47A248",v:'<path d="M12.5 24h-1.1l-.5-2.3C8.2 20.8 6 18.2 6 14.4 6 10.1 9.5 6 11.5 3.6c.3-.4.6-.8.9-1.1.1-.1.3-.1.4 0 .3.3.6.7.9 1.1C15.6 6 19.1 10.1 19.1 14.4c0 3.8-2.2 6.4-5 7.3L12.5 24z" fill="#47A248"/>'},
{n:"Redis",c:"#DC382D",v:'<path d="M12 2C6.5 2 2 4.7 2 8v8c0 3.3 4.5 6 10 6s10-2.7 10-6V8c0-3.3-4.5-6-10-6zm0 14c-4.4 0-8-1.8-8-4v-1.3C5.8 11.8 8.8 12.5 12 12.5s6.2-.7 8-1.8V12c0 2.2-3.6 4-8 4zm0-6c-4.4 0-8-1.5-8-3s3.6-3 8-3 8 1.5 8 3-3.6 3-8 3z" fill="#DC382D"/>'},
{n:"Snowflake",c:"#29B5E8",v:'<circle cx="12" cy="12" r="3" fill="#29B5E8"/><path d="M12 2v4m0 12v4M4.9 4.9l2.8 2.8m8.5 8.5l2.8 2.8M2 12h4m12 0h4M4.9 19.1l2.8-2.8m8.5-8.5l2.8-2.8" stroke="#29B5E8" stroke-width="2" stroke-linecap="round" fill="none"/>'},
{n:"Redshift",c:"#8C4FFF",v:'<path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2L18 7.5v9L12 19.8 6 16.5v-9L12 4.2z" fill="#8C4FFF"/><path d="M12 8v8l5-4-5-4z" fill="#8C4FFF"/>'},
]},
{nm:"GenAI Models",ic:"🤖",items:[
{n:"GPT-4",c:"#412991",v:'<path d="M22.3 9.8a6 6 0 00-.5-4.9 6 6 0 00-6.5-2.9A6.1 6.1 0 0012 0a6 6 0 00-4.6 1.5A6 6 0 003.5 5.9a6 6 0 00-1.8 4.1 6 6 0 00.5 4.9 6 6 0 006.5 2.9A6 6 0 0012 24a6 6 0 004.6-1.5 6 6 0 004-4.4 6 6 0 001.7-4.1z" fill="#412991"/>'},
{n:"LLaMA",c:"#0467DF",v:'<circle cx="12" cy="12" r="10" fill="#0467DF"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">L</text>'},
{n:"Mixtral",c:"#FF7000",v:'<circle cx="12" cy="12" r="10" fill="#FF7000"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">M</text>'},
{n:"Gemma",c:"#8E24AA",v:'<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7 3.5v7.6l-7 3.5-7-3.5V7.7l7-3.5z" fill="#8E24AA"/><path d="M12 8l-4 2v4l4 2 4-2v-4l-4-2z" fill="#8E24AA"/>'},
{n:"Claude",c:"#D97706",v:'<circle cx="12" cy="12" r="10" stroke="#D97706" stroke-width="2" fill="none"/><circle cx="9" cy="10" r="1.5" fill="#D97706"/><circle cx="15" cy="10" r="1.5" fill="#D97706"/><path d="M8 15c1 2 3 3 4 3s3-1 4-3" stroke="#D97706" stroke-width="1.5" fill="none"/>'},
{n:"Gemini",c:"#4285F4",v:'<circle cx="12" cy="12" r="10" fill="#4285F4"/><circle cx="12" cy="12" r="6" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="#fff"/>'},
]},
{nm:"Tools & Cloud",ic:"☁️",items:[
{n:"AWS",c:"#FF9900",v:'<path d="M18.8 11.4c.1-.5.1-1 .1-1.6C18.9 5.6 15.5 2.2 11.3 2.2c-3.5 0-6.4 2.3-7.4 5.5C1.7 8.5 0 10.6 0 13.2 0 16.4 2.6 19 5.8 19h12.4c2.7 0 5-2.2 5-5s-1.8-4.4-4.1-4.9z" fill="#FF9900"/>'},
{n:"Azure",c:"#0078D4",v:'<path d="M13.1 4.2L7.6 18.1l-2.5-8.8L13.1 4.2zm9.1 12.7l-5.1-7.5.3-.9 2.6 8.4h2.2z" fill="#0078D4"/><path d="M6.6 18.9l5.3-6.3-1.7-5.2-5.4 11.5h1.8zm10.6 0H8.6l5.4-6.3 3.2 6.3z" fill="#0078D4" opacity=".7"/>'},
{n:"Docker",c:"#2496ED",v:'<path d="M13 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zM4 9h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm7 1.5c-.7-.4-1.5-.5-2.2-.5-.3-1.1-1.1-2-2.3-2.5l-.3.5c-.4.7-.5 1.8-.2 2.6-1 .5-2.6.7-7.5.7C1.3 14.5 3 19 6.5 20.5c1.2.5 2.5.8 4 .8 3.5 0 6.5-1.5 8.5-4.5 1.5-2 2-5 1.5-7.3z" fill="#2496ED"/>'},
{n:"Git",c:"#F05032",v:'<path d="M23.5 10.9L13.1.5c-.6-.6-1.6-.6-2.2 0L8.7 2.6l2.8 2.8c.8-.3 1.8-.1 2.3.6s.7 1.5.4 2.3l2.7 2.7c.8-.3 1.7-.1 2.3.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.8-1.5-.5-2.3l-2.5-2.5v6.5c.8.4 1.3 1.3 1.1 2.2-.2 1.1-1.2 1.8-2.3 1.6-1-.2-1.7-1.1-1.6-2.2.1-.7.5-1.2 1.1-1.5V8.7c-.6-.2-1-.8-1.1-1.4-.2-1 .4-2 1.4-2.3L7.6 3.6.5 10.8c-.6.6-.6 1.6 0 2.2l10.5 10.5c.6.6 1.6.6 2.2 0L23.5 13.1c.6-.6.6-1.6 0-2.2z" fill="#F05032"/>'},
{n:"GitHub",c:"#181717",v:'<path d="M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3 24 5.7 18.6.3 12 .3" fill="#181717"/>'},
{n:"Jira",c:"#0052CC",v:'<path d="M11.6 11.5H0c0 2.9 2.3 5.2 5.2 5.2h2.1v2.1c0 2.9 2.3 5.2 5.2 5.2V12.5c0-.6-.4-1-1-1zm5.7-5.8H5.7c0 2.9 2.3 5.2 5.2 5.2h2.1v2.1c0 2.9 2.3 5.2 5.2 5.2V6.8c0-.6-.4-1-1-1z" fill="#0052CC"/>'},
{n:"Postman",c:"#FF6C37",v:'<path d="M13.5.1C7-.7.9 3.9.1 10.5s3.8 12.6 10.4 13.4c6.6.8 12.6-3.8 13.4-10.4C24.7 7 20.1.9 13.5.1zm2.5 7.5c-.2 0-.4.1-.6.3l-4.5 4.4-.9-1 4.4-4.4c.3-.3.9-.3 1.2 0 .2.2.3.4.3.7z" fill="#FF6C37"/>'},
{n:"Terraform",c:"#7B42BC",v:'<path d="M1.5 3v7l6 3.5V6L1.5 3zm7.5 4v7l6 3.5V10L9 7zm0 8.5V22l6-3.5v-7L9 15.5zM16.5 10v7l6-3.5V6l-6 4z" fill="#7B42BC"/>'},
]},
];
const xp=[
{yr:"Jan 2026 — Present",rl:"Data Engineer & AI Developer Intern",co:"Intelligent Dataworks, USA",tg:["Python","SQL","LLM APIs","FastAPI","Prompt Engineering","GenAI"],pt:["Developed data-driven GenAI skills for an HR AI Assistant SaaS platform by integrating LLM APIs, prompt engineering, and structured business data to automate HR workflows","Designed SQL-based data extraction and transformation workflows to harmonize HR-related datasets, improving data consistency and enabling accurate retrieval for AI-driven decision automation","Implemented scalable RESTful APIs for CRUD operations, with pagination, filtering, and search functionality","Collaborated with leadership and engineering teams through daily stand-ups to align GenAI and data engineering deliverables with product goals"]},
{yr:"May 2023 — Aug 2024",rl:"AI/ML Engineer",co:"Laxicon Solution, India",tg:["Python","AWS","RAG","LangChain","S3","Lambda"],pt:["Developed Python-based AI pipelines to process and structure unorganized information for use in LLM-powered knowledge management systems","Researched and evaluated cutting-edge LLMs, benchmarking 300+ prompts across text generation, summarization, and code synthesis tasks to identify models with up to 20% higher reliability","Experienced with AWS services (S3, Lambda, CloudWatch, RDS) to deploy and manage retrieval pipelines and backend infrastructure supporting LLM-powered HR assistants","Applied prompt engineering and RAG techniques to optimize model responses for enterprise workflows","Utilized SQL to extract, clean, and structure business data for AI pipelines and retrieval systems, improving LLM accuracy"]},
{yr:"Jun 2022 — May 2023",rl:"ML Engineer",co:"DH Group, India",tg:["FastAPI","SQL","MongoDB","Azure Functions","Agile"],pt:["Built a user management microservice with Python (FastAPI), improving feature delivery speed and system scalability for a B2B application used by 1,000+ users","Leveraged SQL to design and optimize complex queries for user records across 500K+ rows, reducing query latency by 30% and improving API response time","Optimized backend systems by leveraging MongoDB for efficient database management and hosting API endpoints on Azure Functions","Implemented scalable RESTful APIs for CRUD operations with pagination, filtering, and search functionality","Participated in SDLC, collaborating with Product Owners and QA in Agile to deliver sprint features on time"]},
];
const ed=[
{s:"Northeastern University",l:"Boston, MA",dg:"Master of Science, Analytics",dt:"Sep 2024 – Dec 2026",cw:"Probability & Statistics, Predictive Analytics, Visualization, Data Warehouse, Database Design & Data Mining, Machine Learning, NLP, Deep Learning",bg:C.roseLight},
{s:"Saurashtra University",l:"India",dg:"Bachelor of Science, Computer Science",dt:"Apr 2019 – May 2022",cw:"OOP (C++), Data Structures, RDBMS & Oracle, Java, Operating Systems, Network Technology, Python, Web Development, Software Engineering, DBMS",bg:C.blueLight},
];
const so=[
{l:"LinkedIn",h:"https://www.linkedin.com/in/hirvita-kabariya-101938329/",p:"M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 110-4.1 2.1 2.1 0 010 4.1zm1.8 13H3.6V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5C0 23.2.8 24 1.8 24h20.5c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"},
{l:"GitHub",h:"https://github.com/hirvita-kabariya",p:"M12 .3c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 22.1 24 17.6 24 12.3c0-6.6-5.4-12-12-12"},
{l:"Email",h:"mailto:kabariya.h@northeastern.edu",p:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},
];
const pg=["home","experience","skills","projects"];
const lb={home:"About",experience:"Experience",skills:"Skills",projects:"Projects"};
function Bg(){const r=useRef(null);useEffect(()=>{const c=r.current,x=c.getContext("2d");let w=c.width=innerWidth,h=c.height=innerHeight,t=0;const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight;};addEventListener("resize",rs);let f;const d=()=>{t++;x.fillStyle=C.bg;x.fillRect(0,0,w,h);[[.15,.2,400,[94,174,174],.0006,0],[.75,.3,350,[74,107,122],.0008,2],[.5,.7,300,[159,208,208],.0005,4]].forEach(([bx,by,ra,cl,s,p])=>{const px=(bx+Math.sin(t*s+p)*.1)*w,py=(by+Math.cos(t*s*1.3+p)*.08)*h,g=x.createRadialGradient(px,py,0,px,py,ra);g.addColorStop(0,`rgba(${cl},.07)`);g.addColorStop(1,"transparent");x.fillStyle=g;x.fillRect(0,0,w,h);});f=requestAnimationFrame(d);};d();return()=>{cancelAnimationFrame(f);removeEventListener("resize",rs);};},[]); return <canvas ref={r} style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}}/>;}
function Typ({text,speed=16,onDone}){const[d,setD]=useState("");const[dn,setDn]=useState(false);useEffect(()=>{let i=0,t;const g=()=>{if(i<text.length){setD(text.slice(0,i+1));i++;t=setTimeout(g,speed);}else{setDn(true);onDone&&onDone();}};g();return()=>clearTimeout(t);},[]);return <span>{d}{!dn&&<span style={{animation:"blink .8s step-end infinite",background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>|</span>}</span>;}
function Crs({T,mob}){
const[i,setI]=useState(0);const[ex,setEx]=useState(false);const[k,setK]=useState(0);const p=proj[i];const ts=useRef(null);
const go=n=>{setEx(false);setK(v=>v+1);setI(n);};
const gr=["linear-gradient(135deg,#5EAEAE,#3D6B5E)","linear-gradient(135deg,#4A6B7A,#2C4A5A)","linear-gradient(135deg,#9FD0D0,#4A6B7A)","linear-gradient(135deg,#3D8A8A,#1E4D4D)","linear-gradient(135deg,#5EAEAE,#4A6B7A)","linear-gradient(135deg,#4A8A94,#2C5F6B)"];
const ab={width:mob?40:52,height:mob?40:52,borderRadius:"50%",background:T.card,border:`1.5px solid ${T.border}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:mob?16:20,color:T.heading,transition:"all .3s",flexShrink:0};
return(
<div style={{display:"flex",alignItems:"center",gap:mob?12:28,maxWidth:780,margin:"0 auto"}}>
<button onClick={()=>go((i-1+proj.length)%proj.length)} style={ab} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.rose;e.currentTarget.style.color=C.rose;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.heading;}}>←</button>
<div style={{flex:1}} onTouchStart={e=>{ts.current=e.touches[0].clientX;}} onTouchEnd={e=>{if(!ts.current)return;const d=ts.current-e.changedTouches[0].clientX;if(Math.abs(d)>50){d>0?go((i+1)%proj.length):go((i-1+proj.length)%proj.length);}ts.current=null;}}>
<div key={k} style={{background:T.card,borderRadius:28,border:`1.5px solid ${T.border}`,overflow:"hidden",boxShadow:"0 20px 60px rgba(94,174,174,.06)",animation:"c3d .5s ease"}}>
<div style={{height:mob?160:200,background:gr[i%6],display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 25% 35%,rgba(255,255,255,.12),transparent 65%)"}}/>
<div style={{position:"absolute",top:18,right:18,background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",borderRadius:10,padding:"5px 14px",border:"1px solid rgba(255,255,255,.15)"}}><span style={{fontSize:10,color:"rgba(255,255,255,.9)",fontWeight:700,letterSpacing:2,textTransform:"uppercase"}}>{p.cat}</span></div>
<div style={{width:mob?60:80,height:mob?60:80,borderRadius:mob?18:24,background:"rgba(255,255,255,.12)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,.18)",animation:"fe 3s ease-in-out infinite"}}><span style={{fontSize:mob?28:40}}>{p.em}</span></div>
</div>
<div style={{padding:mob?"20px 22px 24px":"28px 32px 32px"}}>
<h3 style={{fontSize:mob?18:22,fontWeight:700,color:T.heading,margin:"0 0 12px"}}>{p.t}</h3>
<p style={{fontSize:mob?12:14,color:T.muted,lineHeight:1.8,margin:0}}>{p.d}</p>
{ex&&<p style={{fontSize:13,color:T.text,lineHeight:1.8,marginTop:10,padding:"12px 16px",background:T.bg2,borderRadius:12,border:`1px solid ${T.border}`,animation:"fi .3s"}}>{p.ld}</p>}
<div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"18px 0 22px"}}>{p.tags.map(t=><span key={t} style={{background:p.cl===C.rose?C.roseLight:C.blueLight,color:p.cl===C.rose?C.roseDark:C.blue,padding:"6px 14px",borderRadius:10,fontSize:11,fontWeight:600}}>{t}</span>)}</div>
<div style={{display:"flex",gap:12}}>
<button onClick={()=>setEx(v=>!v)} style={{background:C.grad1,color:"#fff",border:"none",borderRadius:12,padding:"11px 22px",fontSize:13,fontWeight:600,cursor:"pointer",transition:"transform .2s"}} onMouseEnter={e=>e.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}>{ex?"Show Less ↑":"View More ↓"}</button>
<a href={p.gh} target="_blank" rel="noopener noreferrer" style={{background:T.card,color:T.heading,border:`1.5px solid ${T.border}`,borderRadius:12,padding:"11px 22px",fontSize:13,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",gap:6,transition:"all .2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.rose;e.currentTarget.style.color=C.rose;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.heading;}}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={so[1].p}/></svg>GitHub</a>
</div></div></div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginTop:24}}>
<div style={{display:"flex",gap:8}}>{proj.map((_,j)=><div key={j} onClick={()=>go(j)} style={{width:i===j?28:10,height:10,borderRadius:5,background:i===j?C.grad1:T.border,cursor:"pointer",transition:"all .3s"}}/>)}</div>
<span style={{fontSize:12,color:T.subtle,fontWeight:600}}>{i+1}/{proj.length}</span>
</div></div>
<button onClick={()=>go((i+1)%proj.length)} style={ab} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.rose;e.currentTarget.style.color=C.rose;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.heading;}}>→</button>
</div>);}
function Bot({xo,oc,mob}){
const[op,setOp]=useState(false);const[ms,setMs]=useState([{role:"assistant",text:"Hi! Ask me anything about Hirvita!"}]);const[ip,setIp]=useState("");const[ld,setLd]=useState(false);const[tt,setTt]=useState(false);const[ds,setDs]=useState(false);const er=useRef(null);
const apiUrl=import.meta.env.VITE_API_URL||"/api/chat";
useEffect(()=>{er.current?.scrollIntoView({behavior:"smooth"});},[ms]);
useEffect(()=>{if(xo){setOp(true);setTt(false);setDs(true);}},[xo]);
useEffect(()=>{const a=setTimeout(()=>{if(!op&&!ds)setTt(true);},3000);const b=setTimeout(()=>{setTt(false);setDs(true);},13000);return()=>{clearTimeout(a);clearTimeout(b);};},[ds,op]);
const tg=()=>{const n=!op;setOp(n);setTt(false);setDs(true);if(!n&&oc)oc();};
const sd=async t=>{if(!t.trim()||ld)return;const u=t.trim();setIp("");setMs(p=>[...p,{role:"user",text:u}]);setLd(true);try{const h=[...ms.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text})),{role:"user",content:u}];const r=await fetch(apiUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:h})});const d=await r.json();if(d.error){setMs(p=>[...p,{role:"assistant",text:"API Error: "+(d.error.message||d.error)}]);}else{setMs(p=>[...p,{role:"assistant",text:d.choices?.[0]?.message?.content||"Error."}]);}}catch(e){console.error(e);setMs(p=>[...p,{role:"assistant",text:"Connection error: "+e.message}]);}setLd(false);};
return(<div>
{tt&&!op&&<div style={{position:"fixed",bottom:mob?110:108,right:mob?16:28,zIndex:1002,background:"#fff",borderRadius:14,padding:"10px 16px",boxShadow:"0 8px 30px rgba(0,0,0,.1)",border:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:8}}>✨ <span style={{fontSize:13,color:C.text,fontWeight:500}}>Ask me anything!</span></div>}
<button onClick={tg} style={{position:"fixed",bottom:mob?56:48,right:mob?16:28,zIndex:1001,width:mob?52:60,height:mob?52:60,borderRadius:18,background:"linear-gradient(145deg,#6BBFBF,#4A8A94)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 35px rgba(94,174,174,.35)",transition:"all .4s",transform:op?"rotate(45deg) scale(.9)":"scale(1)"}}>
{op?<span style={{fontSize:22,color:"#fff"}}>+</span>:<div style={{width:28,height:24,background:"#fff",borderRadius:"50% 50% 50% 12%",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{display:"flex",gap:3}}>{[0,1,2].map(i=><div key={i} style={{width:4,height:4,borderRadius:"50%",background:"#4A8A94"}}/>)}</div></div>}
</button>
{op&&<div style={{position:"fixed",inset:0,zIndex:1000,background:"linear-gradient(180deg,#E4F2F2,#F4F6F7 30%,#FDF8F6)",display:"flex",flexDirection:"column",animation:"fi .3s"}}>
<div style={{padding:"16px 32px"}}><button onClick={tg} style={{background:"rgba(255,255,255,.7)",border:`1px solid ${C.border}`,borderRadius:12,padding:"10px 20px",cursor:"pointer",fontSize:14,fontWeight:500,color:C.text}}>← Back to Portfolio</button></div>
<div style={{textAlign:"center",padding:"10px 24px 20px"}}><h1 style={{fontSize:36,fontWeight:800,margin:0,color:C.heading}}>Ask <span style={{background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Hirvita</span></h1></div>
<div style={{flex:1,display:"flex",flexDirection:"column",maxWidth:800,width:"100%",margin:"0 auto",padding:"0 24px",overflow:"hidden"}}>
<div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:14}}>{["Background","Projects","Skills"].map(q=><button key={q} onClick={()=>sd(q)} style={{background:C.grad1,color:"#fff",border:"none",borderRadius:99,padding:"8px 18px",fontSize:12,fontWeight:600,cursor:"pointer"}}>{q}</button>)}</div>
<div style={{flex:1,background:"rgba(255,255,255,.65)",borderRadius:20,border:"1px solid rgba(255,255,255,.7)",overflow:"hidden",display:"flex",flexDirection:"column",minHeight:0}}>
<div style={{flex:1,overflowY:"auto",padding:"20px 24px",display:"flex",flexDirection:"column",gap:14}}>
{ms.map((m,i)=>{const u=m.role==="user";return <div key={i} style={{display:"flex",justifyContent:u?"flex-end":"flex-start"}}><div style={{maxWidth:"75%",background:u?"linear-gradient(135deg,#5EAEAE,#4A8A94)":"#fff",color:u?"#fff":C.text,padding:"12px 18px",borderRadius:18,borderBottomRightRadius:u?4:18,borderBottomLeftRadius:u?18:4,fontSize:14,lineHeight:1.7,border:u?"none":`1px solid ${C.border}`}}>{m.text}</div></div>;})}
{ld&&<div style={{display:"flex"}}><div style={{background:"#fff",border:`1px solid ${C.border}`,padding:"12px 18px",borderRadius:18,display:"flex",gap:5}}>{[0,1,2].map(j=><div key={j} style={{width:7,height:7,borderRadius:"50%",background:C.roseMid,animation:`bn 1.2s ${j*.15}s infinite`}}/>)}</div></div>}
<div ref={er}/>
</div></div>
<div style={{padding:"14px 0 6px"}}><div style={{flex:1,background:"rgba(255,255,255,.75)",borderRadius:18,padding:"4px 4px 4px 18px",border:`1.5px solid ${C.border}`,display:"flex",alignItems:"center",gap:6}}><input value={ip} onChange={e=>setIp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sd(ip)} placeholder="Ask something..." style={{flex:1,padding:"12px 0",background:"transparent",border:"none",color:C.heading,fontSize:14,outline:"none"}}/><button onClick={()=>sd(ip)} disabled={ld||!ip.trim()} style={{background:ip.trim()&&!ld?C.grad1:"rgba(94,174,174,.25)",border:"none",borderRadius:12,width:42,height:42,cursor:ip.trim()?"pointer":"default",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:16,fontWeight:700}}>→</button></div></div>
</div></div>}
</div>);}
function Soc({sz=40}){return <div style={{display:"flex",gap:14}}>{so.map(s=><a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{width:sz,height:sz,borderRadius:10,background:C.bg2,border:`1.5px solid ${C.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:C.muted,transition:"all .3s",textDecoration:"none"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.rose;e.currentTarget.style.color=C.rose;e.currentTarget.style.transform="translateY(-3px)";}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.muted;e.currentTarget.style.transform="none";}}><svg viewBox="0 0 24 24" fill="currentColor" width={sz*.45} height={sz*.45}><path d={s.p}/></svg></a>)}</div>;}
function Hd({sub,title,grad,T}){return <div style={{marginBottom:48}}><div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}><div style={{width:36,height:3,borderRadius:2,background:C.grad1}}/><span style={{fontSize:13,background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:4,textTransform:"uppercase",fontWeight:700}}>{sub}</span></div><h2 style={{fontSize:"clamp(28px,5vw,38px)",fontWeight:800,color:T.heading,margin:0,letterSpacing:-1.5}}>{title} <span style={{background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{grad}</span></h2></div>;}

export default function App(){
const[vis,setVis]=useState(false);const[chat,setChat]=useState(false);const[dk,setDk]=useState(false);const[page,setPage]=useState("home");const[fk,setFk]=useState(0);const[cOpen,setCOpen]=useState(false);const[mob,setMob]=useState(false);const[menu,setMenu]=useState(false);const[load,setLoad]=useState(true);const[typed,setTyped]=useState(false);const[dir,setDir]=useState("right");const[scr,setScr]=useState(0);const[cur,setCur]=useState({x:-100,y:-100});const[aboutTab,setAboutTab]=useState("bio");
useEffect(()=>{const r=()=>setMob(innerWidth<768);r();addEventListener("resize",r);const t=setTimeout(()=>{setLoad(false);setTimeout(()=>setVis(true),300);},2200);return()=>{removeEventListener("resize",r);clearTimeout(t);};},[]);
useEffect(()=>{const h=()=>{const st=document.documentElement.scrollTop;const sh=document.documentElement.scrollHeight-document.documentElement.clientHeight;setScr(sh>0?(st/sh)*100:0);};addEventListener("scroll",h);return()=>removeEventListener("scroll",h);},[]);
useEffect(()=>{if(mob)return;const h=e=>setCur({x:e.clientX,y:e.clientY});addEventListener("mousemove",h);return()=>removeEventListener("mousemove",h);},[mob]);
const go=id=>{const ci=pg.indexOf(page);const ni=pg.indexOf(id);setDir(ni>ci?"right":"left");setFk(k=>k+1);setPage(id);setCOpen(false);setMenu(false);};
const T=dk?{bg:"#0F1A1D",bg2:"#152226",card:"#1A2C31",border:"#243A40",heading:"#E8F4F0",text:"#A8C4BB",muted:"#6B9B8E",subtle:"#3D6B5E",nav:"rgba(15,26,29,.85)"}:{bg:C.bg,bg2:C.bg2,card:C.card,border:C.border,heading:C.heading,text:C.text,muted:C.muted,subtle:C.subtle,nav:"rgba(244,246,247,.75)"};
const px=mob?"24px":"64px";
return(
<div style={{fontFamily:"'Inter',-apple-system,sans-serif",color:T.text,background:T.bg,minHeight:"100vh"}}>
{load&&<div style={{position:"fixed",inset:0,zIndex:9999,background:T.bg,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:24,animation:"lb 2.2s ease"}}>
<div style={{position:"relative",width:100,height:100}}><div style={{position:"absolute",inset:-4,borderRadius:"50%",border:"3px solid transparent",borderTopColor:C.rose,animation:"sp 1s linear infinite"}}/><div style={{position:"absolute",inset:4,borderRadius:"50%",border:"3px solid transparent",borderTopColor:C.blue,animation:"sp 1.5s linear infinite reverse"}}/><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",animation:"lp 1.5s ease-in-out infinite"}}><span style={{fontSize:36,fontWeight:800,background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>HK</span></div></div>
<div style={{display:"flex",gap:6}}>{[0,1,2].map(i=><div key={i} style={{width:8,height:8,borderRadius:"50%",background:C.roseMid,animation:`bn 1.2s ${i*.2}s infinite`}}/>)}</div>
<p style={{fontSize:13,color:T.muted,letterSpacing:3,textTransform:"uppercase",fontWeight:500,animation:"fi 1s ease .5s both"}}>Loading Portfolio</p>
</div>}
<div style={{position:"fixed",top:0,left:0,width:`${scr}%`,height:3,background:C.grad1,zIndex:60,transition:"width .1s",borderRadius:"0 2px 2px 0"}}/>
{!mob&&<div style={{position:"fixed",left:cur.x-15,top:cur.y-15,width:30,height:30,borderRadius:"50%",background:"radial-gradient(circle,rgba(94,174,174,.15),transparent 70%)",pointerEvents:"none",zIndex:55,transition:"left .08s,top .08s",filter:"blur(2px)"}}/>}
{!dk&&<Bg/>}
<header style={{position:"fixed",top:0,left:0,right:0,zIndex:50,padding:mob?"12px 20px":"14px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",background:T.nav,backdropFilter:"blur(20px)",borderBottom:`1px solid ${T.border}`}}>
<div style={{fontSize:22,fontWeight:800,cursor:"pointer"}} onClick={()=>go("home")}><span style={{background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>HK</span><span style={{color:C.rose}}>.</span></div>
{!mob&&<div style={{display:"flex",gap:28}}>{pg.map(id=><span key={id} onClick={()=>go(id)} style={{fontSize:14,color:page===id?C.rose:T.muted,cursor:"pointer",fontWeight:page===id?700:500,transition:"all .3s",borderBottom:page===id?`2px solid ${C.rose}`:"2px solid transparent",paddingBottom:4}} onMouseEnter={e=>{if(page!==id)e.target.style.color=C.rose;}} onMouseLeave={e=>{if(page!==id)e.target.style.color=T.muted;}}>{lb[id]}</span>)}</div>}
<div style={{display:"flex",alignItems:"center",gap:mob?8:12}}>
{!mob&&<div style={{position:"relative"}}><button onClick={()=>setCOpen(c=>!c)} style={{background:C.grad1,color:"#fff",borderRadius:12,padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer",border:"none"}}>Contact</button>
{cOpen&&<div style={{position:"absolute",top:"calc(100% + 10px)",right:0,background:T.card,borderRadius:16,padding:16,border:`1.5px solid ${T.border}`,boxShadow:"0 16px 48px rgba(0,0,0,.1)",animation:"fi .25s",minWidth:200,zIndex:100}}>{so.map(s=><a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:12,textDecoration:"none",color:T.heading,transition:"all .2s",fontWeight:500,fontSize:14}} onMouseEnter={e=>{e.currentTarget.style.background=T.bg2;}} onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}><div style={{width:36,height:36,borderRadius:10,background:T.bg2,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:T.muted,flexShrink:0}}><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d={s.p}/></svg></div>{s.l}</a>)}</div>}</div>}
<button onClick={()=>setDk(d=>!d)} style={{width:48,height:28,borderRadius:99,border:"none",cursor:"pointer",background:dk?"#243A40":"#DCE3E6",position:"relative",padding:0}}><div style={{width:22,height:22,borderRadius:"50%",background:dk?"#0F1A1D":"#fff",position:"absolute",top:3,left:dk?23:3,transition:"left .3s",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 4px rgba(0,0,0,.15)",fontSize:12}}>{dk?"🌙":"☀️"}</div></button>
{mob&&<button onClick={()=>setMenu(m=>!m)} style={{width:40,height:40,borderRadius:10,background:"transparent",border:`1.5px solid ${T.border}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:menu?0:4,padding:0}}>
<div style={{width:18,height:2,background:T.muted,borderRadius:1,transition:"all .3s",transform:menu?"rotate(45deg) translateY(1px)":"none"}}/>
{!menu&&<div style={{width:18,height:2,background:T.muted,borderRadius:1}}/>}
<div style={{width:18,height:2,background:T.muted,borderRadius:1,transition:"all .3s",transform:menu?"rotate(-45deg) translateY(-1px)":"none"}}/>
</button>}
</div></header>
{mob&&menu&&<div style={{position:"fixed",top:60,left:0,right:0,bottom:0,zIndex:49,background:T.bg,animation:"fi .2s",padding:"20px 24px",display:"flex",flexDirection:"column",gap:8}}>
{pg.map(id=><button key={id} onClick={()=>go(id)} style={{background:page===id?C.roseLight:"transparent",border:`1.5px solid ${page===id?C.roseMid:T.border}`,borderRadius:14,padding:"16px 20px",fontSize:16,fontWeight:page===id?700:500,color:page===id?C.roseDark:T.heading,cursor:"pointer",textAlign:"left"}}>{lb[id]}</button>)}
<div style={{borderTop:`1px solid ${T.border}`,paddingTop:16,marginTop:8}}><p style={{fontSize:13,color:T.muted,fontWeight:600,marginBottom:12}}>Contact</p><div style={{display:"flex",gap:12}}>{so.map(s=><a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{width:48,height:48,borderRadius:12,background:T.card,border:`1.5px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:T.muted,textDecoration:"none"}}><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d={s.p}/></svg></a>)}</div></div>
</div>}
<div key={fk} style={{position:"relative",zIndex:2,paddingTop:80,paddingBottom:50,minHeight:"100vh",animation:`sl${dir==="right"?"R":"L"} .4s ease`,maxWidth:1100,margin:"0 auto"}}>
{page==="home"&&(<div>
{/* Bio View */}
{aboutTab==="bio"&&(
<div style={{animation:"fi .4s ease"}}>
<div style={{minHeight:"calc(100vh - 130px)",display:"flex",alignItems:"center",padding:`0 ${px}`}}>
<div style={{display:"flex",alignItems:mob?"center":"center",gap:mob?40:72,width:"100%",flexDirection:mob?"column":"row",textAlign:mob?"center":"left"}}>
<div style={{opacity:vis?1:0,transform:vis?"scale(1)":"scale(.9)",transition:"all 1s cubic-bezier(.16,1,.3,1) .3s",flexShrink:0,perspective:800}}>
<div style={{position:"relative",width:mob?180:260,height:mob?180:260,transformStyle:"preserve-3d",transition:"transform .15s",margin:mob?"0 auto":"0"}} onMouseMove={ev=>{if(mob)return;const r=ev.currentTarget.getBoundingClientRect();ev.currentTarget.style.transform=`rotateY(${((ev.clientX-r.left)/r.width-.5)*20}deg) rotateX(${-((ev.clientY-r.top)/r.height-.5)*20}deg) scale(1.04)`;}} onMouseLeave={ev=>{ev.currentTarget.style.transform="none";}}>
<div style={{position:"absolute",inset:-6,borderRadius:"50%",background:C.grad1,animation:"sp 6s linear infinite",opacity:.6}}/>
<div style={{position:"absolute",inset:-6,borderRadius:"50%",background:"linear-gradient(135deg,transparent 30%,rgba(74,107,122,.5) 50%,transparent 70%)",animation:"sp 4s linear infinite reverse"}}/>
<div style={{position:"absolute",inset:0,borderRadius:"50%",background:T.bg}}/>
<div style={{position:"absolute",inset:4,borderRadius:"50%",overflow:"hidden",background:`linear-gradient(145deg,${C.roseLight},${C.blueLight})`}}>
<img src={profilePhoto} alt="Hirvita Kabariya" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
</div>
<div style={{position:"absolute",top:-6,right:24,width:12,height:12,borderRadius:"50%",background:C.rose,opacity:.4,animation:"fe 3s ease-in-out infinite"}}/>
</div></div>
<div style={{flex:1}}>
<p style={{fontSize:mob?11:13,color:C.rose,letterSpacing:4,textTransform:"uppercase",fontWeight:600,marginBottom:14,opacity:vis?1:0,transition:"all .7s ease .5s"}}>Data Engineer & AI Developer</p>
<h1 style={{fontSize:mob?32:52,fontWeight:800,margin:"0 0 6px",letterSpacing:-2,lineHeight:1.08,color:T.heading,opacity:vis?1:0,transform:vis?"none":"translateY(24px)",transition:"all .8s cubic-bezier(.16,1,.3,1) .6s"}}>Hi, I'm</h1>
<h1 style={{fontSize:mob?32:52,fontWeight:800,margin:"0 0 28px",letterSpacing:-2,lineHeight:1.08,opacity:vis?1:0,transform:vis?"none":"translateY(24px)",transition:"all .8s cubic-bezier(.16,1,.3,1) .7s"}}><span style={{background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Hirvita Kabariya</span><span style={{color:T.heading}}>.</span></h1>
<div style={{fontSize:mob?13:15,color:T.muted,lineHeight:1.85,maxWidth:500,marginBottom:28,opacity:vis?1:0,transition:"all .8s ease 1.2s",margin:mob?"0 auto 28px":"0 0 28px"}}>{vis&&!typed?<Typ text="Data Engineer and AI Developer with 2+ years of experience building intelligent pipelines, LLM-powered systems, and scalable backend solutions. Currently pursuing my Master's in Analytics at Northeastern while working at Intelligent Dataworks building GenAI-powered HR solutions." onDone={()=>setTyped(true)}/>:<span>Data Engineer and AI Developer with 2+ years of experience building intelligent pipelines, LLM-powered systems, and scalable backend solutions. Currently pursuing my Master's in Analytics at Northeastern while working at Intelligent Dataworks building GenAI-powered HR solutions.</span>}</div>
<div style={{display:"flex",gap:14,marginBottom:20,opacity:vis?1:0,transition:"all .7s ease 3s",justifyContent:mob?"center":"flex-start",flexWrap:"wrap"}}><button onClick={()=>setChat(true)} style={{background:C.grad1,color:"#fff",border:"none",borderRadius:14,padding:mob?"12px 24px":"14px 32px",fontWeight:600,fontSize:mob?13:15,cursor:"pointer",boxShadow:"0 8px 28px rgba(94,174,174,.22)",transition:"transform .2s",display:"flex",alignItems:"center",gap:8}} onMouseEnter={ev=>ev.currentTarget.style.transform="translateY(-2px)"} onMouseLeave={ev=>ev.currentTarget.style.transform="none"}>🤖 Ask My AI</button><button onClick={()=>setAboutTab("edu")} style={{background:T.card,color:T.heading,border:`1.5px solid ${T.border}`,borderRadius:14,padding:mob?"12px 24px":"14px 32px",fontWeight:600,fontSize:mob?13:15,cursor:"pointer",transition:"all .3s",display:"flex",alignItems:"center",gap:8}} onMouseEnter={ev=>{ev.currentTarget.style.borderColor=C.rose;ev.currentTarget.style.color=C.rose;ev.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={ev=>{ev.currentTarget.style.borderColor=T.border;ev.currentTarget.style.color=T.heading;ev.currentTarget.style.transform="none";}}>🎓 Education</button></div>
<div style={{opacity:vis?1:0,transition:"all .7s ease 3.2s",display:"flex",justifyContent:mob?"center":"flex-start"}}><Soc/></div>
</div></div></div>
</div>)}

{/* Education View */}
{aboutTab==="edu"&&(
<div style={{padding:`40px ${px} 60px`,animation:"fi .4s ease"}}>
<button onClick={()=>setAboutTab("bio")} style={{background:"transparent",border:"none",color:T.muted,fontSize:14,fontWeight:500,cursor:"pointer",display:"flex",alignItems:"center",gap:6,marginBottom:32,padding:0,transition:"color .2s"}} onMouseEnter={ev=>ev.currentTarget.style.color=C.rose} onMouseLeave={ev=>ev.currentTarget.style.color=T.muted}>← Back to About</button>
<Hd sub="Academic Background" title="My" grad="Education" T={T}/>
<div style={{display:"grid",gridTemplateColumns:mob?"1fr":"1fr 1fr",gap:24}}>
{ed.map((e,i)=>(<div key={i} style={{background:T.card,borderRadius:24,padding:"32px 28px",border:`1.5px solid ${T.border}`,position:"relative",overflow:"hidden",transition:"all .4s"}} onMouseEnter={ev=>{ev.currentTarget.style.borderColor=C.roseMid;ev.currentTarget.style.transform="translateY(-4px)";ev.currentTarget.style.boxShadow="0 16px 40px rgba(94,174,174,.08)";}} onMouseLeave={ev=>{ev.currentTarget.style.borderColor=T.border;ev.currentTarget.style.transform="none";ev.currentTarget.style.boxShadow="none";}}>
<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:C.grad1}}/>
<div style={{display:"flex",alignItems:"center",gap:14,marginBottom:16}}>
<div style={{width:48,height:48,borderRadius:16,background:e.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>🎓</div>
<div>
<span style={{fontSize:12,background:C.grad1,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:700,letterSpacing:1.5,display:"block"}}>{e.dt}</span>
<span style={{fontSize:11,color:T.muted}}>{e.l}</span>
</div>
</div>
<h3 style={{fontSize:mob?18:20,fontWeight:700,color:T.heading,margin:"0 0 6px"}}>{e.s}</h3>
<p style={{fontSize:16,color:T.text,margin:"0 0 18px",fontWeight:600}}>{e.dg}</p>
<div style={{background:T.bg2,borderRadius:14,padding:"16px 18px",border:`1px solid ${T.border}`}}>
<p style={{fontSize:11,color:C.rose,fontWeight:700,letterSpacing:2,textTransform:"uppercase",margin:"0 0 8px"}}>Coursework</p>
<div style={{display:"flex",flexWrap:"wrap",gap:8}}>
{e.cw.split(", ").map((c,j)=>(<span key={j} style={{background:T.card,padding:"5px 12px",borderRadius:8,fontSize:12,fontWeight:500,color:T.text,border:`1px solid ${T.border}`}}>{c}</span>))}
</div>
</div>
</div>))}
</div>
</div>)}
</div>)}
{page==="experience"&&(<div style={{padding:`50px ${px} 60px`}}>
<Hd sub="Professional Experience" title="Where I've" grad="Worked" T={T}/>
<div style={{maxWidth:820}}>{xp.map((e,i)=>(<div key={i} style={{display:"flex",gap:32}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",width:24,flexShrink:0}}><div style={{width:16,height:16,borderRadius:"50%",background:i===0?C.grad1:T.card,border:`3px solid ${i===0?C.rose:T.subtle}`,boxShadow:i===0?"0 0 16px rgba(94,174,174,.3)":"none"}}/>{i<xp.length-1&&<div style={{width:2,flex:1,background:T.border,minHeight:40}}/>}</div>
<div style={{flex:1,paddingBottom:i<xp.length-1?48:0}}><div style={{background:T.card,borderRadius:24,padding:"32px",border:`1.5px solid ${T.border}`,transition:"all .4s",position:"relative",overflow:"hidden"}} onMouseEnter={ev=>{ev.currentTarget.style.borderColor=C.roseMid;ev.currentTarget.style.transform="translateY(-3px)";ev.currentTarget.style.boxShadow="0 16px 48px rgba(94,174,174,.08)";}} onMouseLeave={ev=>{ev.currentTarget.style.borderColor=T.border;ev.currentTarget.style.transform="none";ev.currentTarget.style.boxShadow="none";}}>
{i===0&&<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:C.grad1}}/>}
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18,flexWrap:"wrap",gap:12}}>
<div><h3 style={{fontSize:20,fontWeight:700,color:T.heading,margin:"0 0 5px"}}>{e.rl}</h3><p style={{fontSize:15,color:C.rose,margin:0,fontWeight:600}}>{e.co}</p></div>
<div style={{background:i===0?C.roseLight:"transparent",border:`1.5px solid ${i===0?C.roseMid:T.border}`,borderRadius:12,padding:"6px 16px"}}><span style={{fontSize:12,fontWeight:700,color:i===0?C.roseDark:T.muted}}>{e.yr}</span></div>
</div>
<div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:20}}>{e.pt.map((p,j)=><div key={j} style={{display:"flex",gap:12,alignItems:"flex-start"}}><div style={{width:6,height:6,borderRadius:"50%",background:C.rose,marginTop:8,flexShrink:0,opacity:.7}}/><span style={{fontSize:14,color:T.text,lineHeight:1.75}}>{p}</span></div>)}</div>
<div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{e.tg.map(t=><span key={t} style={{background:T.bg2,color:T.heading,padding:"6px 14px",borderRadius:10,fontSize:11,fontWeight:600,border:`1px solid ${T.border}`}}>{t}</span>)}</div>
</div></div></div>))}</div>
</div>)}
{page==="skills"&&(<div style={{padding:`50px ${px} 60px`}}>
<Hd sub="Technical Skills" title="My" grad="Tech Stack" T={T}/>
<div style={{display:"grid",gridTemplateColumns:mob?"1fr":"repeat(3,1fr)",gap:24}}>{sk.map((cat,ci)=>(<div key={ci} style={{background:T.card,borderRadius:24,padding:"28px 26px",border:`1.5px solid ${T.border}`,transition:"all .4s"}} onMouseEnter={ev=>{ev.currentTarget.style.borderColor=C.roseMid;ev.currentTarget.style.transform="translateY(-4px)";ev.currentTarget.style.boxShadow="0 16px 48px rgba(94,174,174,.08)";}} onMouseLeave={ev=>{ev.currentTarget.style.borderColor=T.border;ev.currentTarget.style.transform="none";ev.currentTarget.style.boxShadow="none";}}>
<div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}><div style={{width:36,height:36,borderRadius:10,background:C.roseLight,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>{cat.ic}</div><h3 style={{fontSize:16,fontWeight:700,color:T.heading,margin:0}}>{cat.nm}</h3></div>
<div style={{display:"flex",flexWrap:"wrap",gap:10}}>{cat.items.map(s=>(<div key={s.n} style={{display:"flex",alignItems:"center",gap:7,background:T.bg2,borderRadius:12,padding:"9px 14px",border:`1px solid ${T.border}`,transition:"all .3s",cursor:"default"}} onMouseEnter={ev=>{ev.currentTarget.style.transform="translateY(-4px) scale(1.06)";ev.currentTarget.style.borderColor=s.c+"50";}} onMouseLeave={ev=>{ev.currentTarget.style.transform="none";ev.currentTarget.style.borderColor=T.border;}}>
<div style={{width:20,height:20,flexShrink:0}} dangerouslySetInnerHTML={{__html:`<svg viewBox="0 0 24 24" width="20" height="20">${s.v}</svg>`}}/>
<span style={{fontSize:13,fontWeight:600,color:T.heading}}>{s.n}</span>
</div>))}</div>
</div>))}</div>
</div>)}
{page==="projects"&&(<div style={{padding:`50px ${px} 60px`}}>
<Hd sub="Featured Projects" title="What I've" grad="Built" T={T}/>
<Crs T={T} mob={mob}/>
</div>)}
</div>
<footer style={{position:"fixed",bottom:0,left:0,right:0,zIndex:40,padding:"12px 0",textAlign:"center",background:T.nav,backdropFilter:"blur(16px)",borderTop:`1px solid ${T.border}`}}><span style={{fontSize:12,color:T.subtle}}>© 2026 Hirvita Kabariya · Made with ❤️</span></footer>
<Bot xo={chat} oc={()=>setChat(false)} mob={mob}/>
<style>{`
@keyframes blink{50%{opacity:0}}
@keyframes sp{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes fe{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes bn{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes c3d{0%{opacity:0;transform:rotateY(12deg) scale(.92);filter:blur(6px)}100%{opacity:1;transform:none;filter:none}}
@keyframes slR{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}
@keyframes slL{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:none}}
@keyframes lp{0%,100%{transform:scale(1)}50%{transform:scale(1.1);opacity:.8}}
@keyframes lb{0%{opacity:1}85%{opacity:1}100%{opacity:0;pointer-events:none}}
*::-webkit-scrollbar{width:5px}*::-webkit-scrollbar-track{background:${C.bg}}*::-webkit-scrollbar-thumb{background:${C.roseMid};border-radius:3px}
`}</style>
</div>);
}