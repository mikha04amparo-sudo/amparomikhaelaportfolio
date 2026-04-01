import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  CheckCircle2, 
  Monitor, 
  Database, 
  Calendar, 
  MessageSquare, 
  Search, 
  FileText, 
  Layout, 
  Stethoscope,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  ChevronRight,
  FolderOpen,
  CheckSquare,
  Droplets
} from 'lucide-react';
import { motion } from 'motion/react';
import { EditablePhoto } from './components/EditablePhoto';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold text-dark-brown mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-dark-brown/70 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1 bg-soft-pink-dark mx-auto mt-6 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-warm-white selection:bg-soft-pink-dark selection:text-white">
      {/* 1. COVER PAGE */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center section-padding bg-gradient-to-br from-white via-soft-pink/20 to-light-brown/10">
        <div className="flex-1 space-y-6 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-dark-brown leading-tight">
              MIKHAELA <br />
              <span className="text-soft-pink-dark">AMPARO</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-dark-brown/80 mt-4">
              Virtual Assistant | Healthcare Support Specialist
            </p>
            <p className="text-lg text-dark-brown/60 italic mt-2">
              Detail-Oriented | Patient-Focused | Data & Admin Expert
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-6"
          >
            <div className="flex items-center gap-2 text-dark-brown/70">
              <MapPin size={18} className="text-soft-pink-dark" />
              <span>Cavite, Philippines</span>
            </div>
            <div className="flex items-center gap-2 text-dark-brown/70">
              <Mail size={18} className="text-soft-pink-dark" />
              <span>amparo.mikhaela@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-dark-brown/70">
              <Phone size={18} className="text-soft-pink-dark" />
              <span>0965 321 1881</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-8"
          >
            <a 
              href="https://www.linkedin.com/in/amparomikhaela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark-brown text-white px-8 py-4 rounded-full font-bold hover:bg-dark-brown/90 transition-all shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-md mt-12 md:mt-0 md:ml-12"
        >
          <EditablePhoto 
            id="cover-photo" 
            aspectRatio="aspect-[3/4]" 
            label="Insert Full-Body Photo"
            className="shadow-2xl"
          />
        </motion.div>
      </section>

      {/* 2. ABOUT ME */}
      <section className="section-padding bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm"
          >
            <EditablePhoto 
              id="about-photo" 
              aspectRatio="aspect-square" 
              label="Insert Close-Up Photo"
              className="shadow-xl"
            />
          </motion.div>
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-display font-bold text-dark-brown">About Me</h2>
            <div className="w-20 h-1 bg-soft-pink-dark rounded-full" />
            <p className="text-lg leading-relaxed text-dark-brown/80">
              I am a detail-oriented Medical Assistant and aspiring Virtual Assistant with hands-on experience in healthcare operations, patient coordination, and administrative support. 
            </p>
            <p className="text-lg leading-relaxed text-dark-brown/80">
              With a strong background in laboratory services and data management, I bring accuracy, efficiency, and professionalism to every task. I specialize in handling sensitive information, managing schedules, and supporting high-volume workflows—making me a reliable remote support partner for healthcare providers and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="section-padding bg-soft-pink/10">
        <SectionTitle>Services I Offer</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Medical Virtual Assistance", icon: <Stethoscope /> },
            { title: "Data Entry & Record Management", icon: <Database /> },
            { title: "Patient Scheduling & Coordination", icon: <Calendar /> },
            { title: "Email & Calendar Management", icon: <Mail /> },
            { title: "File Organization", icon: <FolderOpen /> },
            { title: "Online Research & Admin Support", icon: <Search /> },
            { title: "Laboratory Data Encoding", icon: <FileText /> },
            { title: "Customer Support", icon: <MessageSquare /> },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-soft-pink rounded-xl flex items-center justify-center text-soft-pink-dark mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold text-dark-brown">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TOOLS & TECHNOLOGIES */}
      <section className="section-padding bg-white">
        <SectionTitle>Tools I Use</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              category: "Productivity", 
              tools: ["Microsoft Word", "Excel", "PowerPoint", "Google Docs", "Sheets"],
              icon: <Monitor />
            },
            { 
              category: "Communication", 
              tools: ["Gmail", "Zoom", "Google Meet"],
              icon: <MessageSquare />
            },
            { 
              category: "File Management", 
              tools: ["Google Drive", "Dropbox"],
              icon: <FolderOpen />
            },
            { 
              category: "Systems", 
              tools: ["Laboratory Information System (LIS)"],
              icon: <Database />
            },
            { 
              category: "Others", 
              tools: ["Canva (Basic Design)", "Internet Research Tools"],
              icon: <Layout />
            },
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-warm-white border border-light-brown/30"
            >
              <div className="flex items-center gap-3 mb-6 text-soft-pink-dark">
                {cat.icon}
                <h3 className="text-xl font-bold text-dark-brown">{cat.category}</h3>
              </div>
              <ul className="space-y-3">
                {cat.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2 text-dark-brown/70">
                    <CheckCircle2 size={16} className="text-soft-pink-dark" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. KEY SKILLS */}
      <section className="section-padding bg-dark-brown text-white">
        <SectionTitle>Core Skills</SectionTitle>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Patient Care & Client Support",
            "Data Entry & Accuracy",
            "Administrative Assistance",
            "Time Management & Multitasking",
            "Communication Skills",
            "Confidentiality & Data Privacy",
            "Workflow Organization",
            "Attention to Detail"
          ].map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium hover:bg-soft-pink-dark hover:border-soft-pink-dark transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 6. EXPERIENCE */}
      <section className="section-padding bg-white">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              company: "Multilab Diagnostic & Health Services",
              role: "Phlebotomist / Lab Aide / Specimen Collector",
              period: "2025–Present",
              tasks: [
                "Managed and encoded client data with high accuracy",
                "Scheduled appointments and coordinated home services",
                "Organized digital records and maintained documentation",
                "Supported daily operations and improved workflow efficiency"
              ],
              relevance: "Scheduling, data entry, admin support"
            },
            {
              company: "City of Imus Doctors Hospital",
              role: "Medical Laboratory Technician",
              period: "2024–2025",
              tasks: [
                "Maintained and organized patient records using LIS",
                "Generated reports and tracked inventory",
                "Collaborated with healthcare teams for efficient workflows"
              ],
              relevance: "Data management, reporting, organization"
            },
            {
              company: "Wellcare Clinics & Laboratory",
              role: "Phlebotomist",
              period: "2023–2024",
              tasks: [
                "Managed patient records and documentation",
                "Ensured smooth coordination of specimen tracking",
                "Delivered excellent client communication"
              ],
              relevance: "Customer support, documentation"
            }
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-soft-pink-dark"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-soft-pink-dark rounded-full" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-dark-brown">{exp.company}</h3>
                <span className="text-soft-pink-dark font-bold">{exp.period}</span>
              </div>
              <p className="text-lg font-semibold text-dark-brown/80 mb-4">{exp.role}</p>
              <ul className="space-y-2 mb-4">
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2 text-dark-brown/70">
                    <ChevronRight size={18} className="text-soft-pink-dark shrink-0 mt-1" />
                    {task}
                  </li>
                ))}
              </ul>
              <div className="inline-block px-4 py-1 bg-soft-pink rounded text-sm font-bold text-dark-brown">
                👉 VA Relevance: {exp.relevance}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. ACHIEVEMENTS */}
      <section className="section-padding bg-soft-pink/10">
        <SectionTitle>Key Impact Highlights</SectionTitle>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Improved data accuracy and reduced documentation errors",
            "Supported high-volume patient operations efficiently",
            "Maintained organized and accessible records",
            "Ensured compliance with healthcare protocols",
            "Delivered reliable administrative and clinical support"
          ].map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="shrink-0 w-10 h-10 bg-soft-pink-dark text-white rounded-full flex items-center justify-center">
                <Award size={20} />
              </div>
              <p className="font-medium text-dark-brown">{ach}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. EDUCATION */}
      <section className="section-padding bg-white">
        <SectionTitle>Education & Training</SectionTitle>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-warm-white border border-light-brown/30"
          >
            <div className="flex items-center gap-3 mb-6 text-soft-pink-dark">
              <GraduationCap size={32} />
              <h3 className="text-xl font-bold text-dark-brown">Education</h3>
            </div>
            <p className="text-lg font-bold text-dark-brown">Bachelor of Science in Medical Technology</p>
            <p className="text-dark-brown/70">Cavite State University (2023)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-warm-white border border-light-brown/30"
          >
            <div className="flex items-center gap-3 mb-6 text-soft-pink-dark">
              <Award size={32} />
              <h3 className="text-xl font-bold text-dark-brown">Training</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-bold text-dark-brown">Authorized Specimen Collector Training</p>
                <p className="text-sm text-dark-brown/70">2025</p>
              </li>
              <li>
                <p className="font-bold text-dark-brown">Internships</p>
                <p className="text-sm text-dark-brown/70">Dasmariñas City Medical Center</p>
                <p className="text-sm text-dark-brown/70">Emilio Aguinaldo College Medical Center</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 9. SAMPLE WORK */}
      <section className="section-padding bg-soft-pink/5">
        <SectionTitle subtitle="Sample tasks I can do to streamline your workflow">Sample Work</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* MOCK 1: DATA ENTRY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Database size={20} className="text-soft-pink-dark" />
              Data Entry Sample
            </h3>
            <div className="overflow-hidden rounded-xl border border-light-brown/30 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#6B46C1] text-white">
                  <tr>
                    <th className="px-4 py-3">Patient Name</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-light-brown/10">
                    <td className="px-4 py-3">Juan Dela Cruz</td>
                    <td className="px-4 py-3">May 12</td>
                    <td className="px-4 py-3">Blood Test</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Completed</span></td>
                    <td className="px-4 py-3">Normal</td>
                  </tr>
                  <tr className="border-b border-light-brown/10">
                    <td className="px-4 py-3">Maria Santos</td>
                    <td className="px-4 py-3">May 13</td>
                    <td className="px-4 py-3">Urinalysis</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pending</span></td>
                    <td className="px-4 py-3">Follow-up</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Pedro Reyes</td>
                    <td className="px-4 py-3">May 14</td>
                    <td className="px-4 py-3">CBC</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Completed</span></td>
                    <td className="px-4 py-3">Sent to doctor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MOCK 2: CALENDAR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Calendar size={20} className="text-soft-pink-dark" />
              Appointment Scheduling
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-light-brown/30 shadow-sm">
                <p className="font-bold text-soft-pink-dark mb-3 border-b pb-2">Monday</p>
                <div className="space-y-2">
                  <div className="p-2 bg-green-50 text-green-700 rounded text-xs font-medium">9:00 AM – Patient Call</div>
                  <div className="p-2 bg-blue-50 text-blue-700 rounded text-xs font-medium">11:00 AM – Data Encoding</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-light-brown/30 shadow-sm">
                <p className="font-bold text-soft-pink-dark mb-3 border-b pb-2">Tuesday</p>
                <div className="space-y-2">
                  <div className="p-2 bg-purple-50 text-purple-700 rounded text-xs font-medium">10:00 AM – Lab Coordination</div>
                  <div className="p-2 bg-blue-50 text-blue-700 rounded text-xs font-medium">2:00 PM – Email Follow-ups</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 text-[10px] uppercase tracking-wider font-bold">
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full" /> Admin</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full" /> Patient</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full" /> Reports</span>
            </div>
          </motion.div>

          {/* MOCK 3: GOOGLE DRIVE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FolderOpen size={20} className="text-soft-pink-dark" />
              File Organization
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["Client Records", "Lab Reports", "Appointments", "Billing & Invoices"].map((folder, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-light-brown/30 shadow-sm hover:border-soft-pink-dark transition-colors">
                  <FolderOpen className="text-yellow-500" fill="currentColor" fillOpacity={0.2} />
                  <span className="text-sm font-medium">{folder}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-dark-brown/60 italic">“Organized, labeled, and easy retrieval system”</p>
          </motion.div>

          {/* MOCK 4: EMAIL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Mail size={20} className="text-soft-pink-dark" />
              Email Handling
            </h3>
            <div className="bg-white rounded-xl border border-light-brown/30 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b text-xs font-bold text-gray-500">Inbox</div>
              <div className="divide-y">
                {[
                  { subject: "Appointment Confirmation", status: "Completed", color: "bg-green-100 text-green-700" },
                  { subject: "Lab Results Follow-up", status: "Pending", color: "bg-yellow-100 text-yellow-700" },
                  { subject: "New Client Inquiry", status: "Replied", color: "bg-blue-100 text-blue-700" },
                ].map((email, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="text-sm">{email.subject}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${email.color}`}>{email.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MOCK 5: CANVA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 lg:col-span-2 max-w-md mx-auto w-full"
          >
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Layout size={20} className="text-soft-pink-dark" />
              Canva Graphic Sample
            </h3>
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-soft-pink-dark rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
                <Droplets size={32} className="text-white" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-2">Health Reminder</h4>
              <p className="text-white/90 text-lg mb-6">“Stay Hydrated 💧<br />Drink at least 8 glasses of water daily”</p>
              <div className="flex gap-4">
                <Stethoscope className="text-white/50" />
                <CheckSquare className="text-white/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. CONTACT PAGE */}
      <section className="section-padding bg-dark-brown text-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-display font-bold">Let’s Work Together</h2>
            <p className="text-xl text-white/80">
              “I’m ready to help streamline your workflow and support your business remotely.”
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-soft-pink-dark rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase font-bold tracking-wider">Email Me</p>
                  <p className="text-lg">amparo.mikhaela@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-soft-pink-dark rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase font-bold tracking-wider">Call Me</p>
                  <p className="text-lg">0965 321 1881</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-soft-pink-dark rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-lg">Cavite, Philippines</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="mailto:amparo.mikhaela@gmail.com"
                className="inline-block bg-soft-pink-dark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-soft-pink-dark/90 transition-all shadow-xl"
              >
                Send a Message
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm"
          >
            <EditablePhoto 
              id="contact-photo" 
              aspectRatio="aspect-square" 
              label="Insert Photo"
              className="border-white/30 bg-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center border-t border-light-brown/20 bg-warm-white">
        <p className="text-dark-brown/40 text-sm">
          © {new Date().getFullYear()} Mikhaela Amparo. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
