import BuildingsIcon from "@/components/icons/buildings-icon";
import CargoMarineIcon from "@/components/icons/cargo-marine-icon";
import CargoVanIcon from "@/components/icons/cargo-van-icon";
import LeafIcon from "@/components/icons/leaf-icon";
import MoneyBagIcon from "@/components/icons/money-bag-icon";
import TimeScheduleIcon from "@/components/icons/time-schedule-icon";
import ToolsIcon from "@/components/icons/tools-icon";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import Avatar1 from "@/public/images/jpgs/avatar-1.jpg";
import Avatar2 from "@/public/images/jpgs/avatar-2.jpg";
import Avatar3 from "@/public/images/jpgs/avatar-3.jpg";
import Avatar4 from "@/public/images/jpgs/avatar-4.jpg";
import Avatar5 from "@/public/images/jpgs/avatar-5.jpg";
import BugawinLogo from "@/public/images/webps/bugawin-logo.webp";
import CargoOfficers from "@/public/images/webps/cargo-officers.webp";
import FaanLogo from "@/public/images/webps/faan-logo.webp";
import FacilityManagement from "@/public/images/webps/facility-management.webp";
import FreightOfficers from "@/public/images/webps/freight-officers.webp";
import MaxCapitalLogo from "@/public/images/webps/max-capital-logo.webp";
import SaintEdwardsLogo from "@/public/images/webps/st-edwards-logo.webp";
import { Mail, MapPin, Phone } from "lucide-react";

export const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
] as const;

export const listingsLinks = [
    { name: "Jobs", href: "/jobs" },
    { name: "Properties", href: "/properties" },
] as const;

export const ourServices = [
    {
        name: "Facility & Property\n Management",
        description: "Proactive maintenance strategies that ensure your space remains safe, functional, and welcoming.",
        Icon: BuildingsIcon,
        image: FacilityManagement,
    },
    {
        name: "Export & Cargo\n Inspection Services",
        description: "Thorough inspection protocols that guarantee your shipments meet global standards.",
        Icon: CargoVanIcon,
        image: CargoOfficers,
    },
    {
        name: "Freight & Marine\n Solutions",
        description: "Efficient logistics support that ensures seamless movement of goods across Nigeria and beyond.",
        Icon: CargoMarineIcon,
        image: FreightOfficers,
    },
] as const;

export const whoWeAreServices = [
    {
        name: "Building Maintenance",
        description: "Expert maintenance services to preserve the integrity of your buildings.",
    },
    {
        name: "Security & Surveillance",
        description: "Advanced security solutions for a safe and protected environment.",
    },
    {
        name: "Cleaning & Janitorial Services",
        description: "Impeccable cleaning services tailored to commercial and residential needs.",
    },
    {
        name: "Energy & Waste Management",
        description: "Sustainable solutions to optimize resource usage and minimize waste.",
    },
    {
        name: "Space Planning & Optimization",
        description: "Maximizing efficiency and productivity through expert space management.",
    },
] as const;

export const whyChooseUs = [
    {
        name: "Expert-Led Facility Management",
        description:
            "Our team of highly trained professionals ensures that every aspect of your facility runs smoothly, from maintenance to space optimization.",
        Icon: BuildingsIcon,
        image: FacilityManagement,
    },
    {
        name: "24/7 Operational Reliability",
        description:
            "We provide round-the-clock support and rapid response services to handle any facility emergencies efficiently.",
        Icon: TimeScheduleIcon,
        image: CargoOfficers,
    },
    {
        name: "Cutting-Edge Technology Integration",
        description:
            "By leveraging smart building solutions, automated maintenance systems, and IoT-driven monitoring, we keep your facility ahead of the curve.",
        Icon: ToolsIcon,
        image: FreightOfficers,
    },
    {
        name: "Sustainability-Driven Solutions",
        description:
            "We implement eco-friendly practices that minimize waste, reduce energy consumption, and promote sustainable facility management.",
        Icon: LeafIcon,
        image: FacilityManagement,
    },
    {
        name: "Cost-Efficient and Transparent Services",
        description:
            "Our cost-effective facility management strategies ensure maximum efficiency while maintaining full transparency in service execution.",
        Icon: MoneyBagIcon,
        image: CargoOfficers,
    },
];

export const testimonials = [
    {
        name: "Reliable and Professional",
        description:
            "Row & Harmony Limited has transformed our facility management. Their proactive approach keeps our office running seamlessly. We highly recommend them!",
        noOfStars: 4,
        image: Avatar1,
        role: "Operations Manager",
        branch: "Leading Corporate Firm",
    },
    {
        name: "Exceptional Service Delivery",
        description:
            "From maintenance to security, their team ensures our retail space remains pristine and secure. Their attention to detail is unmatched!",
        noOfStars: 5,
        image: Avatar2,
        role: "Facility Head",
        branch: "Major Shopping Mall",
    },
    {
        name: "Efficiency at Its Best",
        description:
            "Their preventive maintenance approach has significantly reduced downtime in our manufacturing plant. We couldn't ask for a better facility partner.",
        noOfStars: 4,
        image: Avatar3,
        role: "Plant Manager",
        branch: "Industrial Company",
    },
    {
        name: "A Trusted Partner",
        description:
            "Their commitment to excellence and proactive approach to facility management have made them an invaluable partner for our organization.",
        noOfStars: 5,
        image: Avatar4,
        role: "Director of Operations",
        branch: "Logistics Company",
    },
    {
        name: "Outstanding Facility Management",
        description:
            "Row & Harmony Limited has been a game-changer for our facility. Their expertise and dedication are evident in every aspect of their service.",
        noOfStars: 4,
        image: Avatar5,
        role: "Facility Manager",
        branch: "Corporate Office",
    },
];

export const contactDetails = [
    { name: "phone", heading: "Call us", label: "+234 809 951 7896", href: "tel:+2348099517896", Icon: Phone },
    {
        name: "email",
        heading: "Write to us",
        label: "randhfacility@gmail.com",
        href: "mailto:randhfacility@gmail.com",
        Icon: Mail,
    },
    {
        name: "whatsapp",
        heading: "Send a message",
        label: "+234 813 104 5878",
        href: "https://wa.me/message/MFGZBNO7EV22H1",
        Icon: WhatsAppIcon,
    },
    {
        name: "address",
        heading: "Visit us",
        label: "34 Abeokuta St, Adekunle, Lagos 101245, Lagos",
        href: "https://maps.app.goo.gl/jmBXYfZFqJvthgSx8",
        Icon: MapPin,
    },
] as const;

export const ourClients = [
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
    { name: "Lagos international Airport — Lagos Nigeria", image: FaanLogo, href: "https://faan.gov.ng/" },
    { name: "Maxcapital investment limited — Ikoyi Lagos", image: MaxCapitalLogo, href: "https://maxcapinvest.com/" },
    { name: "Bugawin — Alagbole Akute (Ogun State)", image: BugawinLogo, href: "https://bugawin.com.ng/" },
    {
        name: "Saint Edwards Rumford Church Hall — London",
        image: SaintEdwardsLogo,
        href: "https://www.stedwardsromford.com/",
    },
];

export const serviceCenter = [
    {
        id: "facility-management",
        title: "Facility & Property Management",
        image: FacilityManagement,
        intro: "We manage buildings like they're our own—with structure, care, and foresight.",
        outro: "Our team is highly trained, detail-oriented, and committed to exceeding your expectations.",
        services: [
            "HVAC, Electrical & Plumbing Maintenance",
            "Fumigation & Pest Control",
            "Janitorial, Window & Carpet Cleaning",
            "CCTV Monitoring & Access Control Systems",
            "Post-Construction Cleaning",
            "Building Management & Energy Optimization",
            "Tenant Liaison & Rent Collection",
            "Lease Negotiation & Property Oversight",
            "Waste Management & Environmental Services",
        ],
    },
    {
        id: "export-inspection",
        title: "Export & Cargo Inspection",
        image: CargoOfficers,
        intro: "We ensure your goods meet international standards and arrive without regulatory setbacks.",
        outro: "Export with confidence. We ensure every shipment is fully compliant, safe, and ready for global markets.",
        services: [
            "Quality Assurance & Pre-shipment Inspection",
            "Customs Compliance Support",
            "Health, Safety & Environmental Checks",
            "Export Documentation & Clearance Assistance",
        ],
    },
    {
        id: "freight-services",
        title: "Freight Services",
        image: FreightOfficers,
        intro: "We move cargo swiftly, safely, and strategically—by air, sea, or road.",
        outro: "From Lagos to the world—your cargo is in capable hands.",
        services: [
            "Ocean Freight through Major Nigerian Ports",
            "Time-Sensitive Air Freight Solutions",
            "Road & Rail Freight within Nigeria and Neighboring Countries",
            "Custom Freight Planning for High-Value or Perishable Goods",
        ],
    },
    {
        id: "marine-services",
        title: "Marine Services",
        image: FreightOfficers,
        intro: "Efficient maritime logistics and vessel support—anchored in safety and reliability.",
        outro: "We keep vessels moving and maritime operations secure and efficient.",
        services: [
            "Port Operations: Loading, Unloading, Warehousing",
            "Ship Maintenance & Maritime Engineering",
            "Logistics Planning for Maritime Cargo",
            "Port Safety, Security, and Compliance Protocols",
        ],
    },
];
