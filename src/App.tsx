/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  MessageCircle, 
  Download, 
  Share2, 
  ExternalLink,
  X,
  QrCode,
  UserPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';

// Mock data - in a real app this could come from a database or props
const profileData = {
  name: "SUJON AHMED",
  title: "Professional Digital Marketer | YouTube Expert | Google Ads | Facebook Ads | Social Media Manager",
  profilePic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuWIpN32bsFeRZWhSELsiBlsJivUHXWALFzsQRnFf_RKfts9PCfGyswITDTIsPqKtX4aEhMFRnYTZGV3cN0szWppYMV_5_fbADC_X3_-W3e4mouuBP4x2FGBxiH3hvVZIps-bXiQNVytdYc__ff-r3spXnPEqi1wIgSzrwAYqOgyvWDrLR6-o3BGet62JG/s320/IMG_20251010_094707_658.jpg",
  phone: "+8801740027957",
  whatsapp: "+8801995620916",
  email: "bdsujonndm@gmail.com",
  website: "dmsujonbd.vercel.app",
  location: "Ulipur, Kurigram, Rangpur Division, Bangladesh",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57564.44493393439!2d89.58983949999999!3d25.659908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29910d54f593b%3A0x6b694b8e04689c8a!2sUlipur!5e0!3m2!1sen!2sbd!4v1712136000000!5m2!1sen!2sbd",
  mapLink: "https://maps.app.goo.gl/YFBRNsF7cA4R4Jgz5",
  socials: [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://www.facebook.com/dmsujonnbd' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/sujonfreelancerdm/' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/prosujonbd' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/dmsujonnbd' },
    { name: 'Website', icon: <Globe className="w-5 h-5" />, url: 'https://dmsujonbd.vercel.app/' },
  ]
};

export default function App() {
  const [showQR, setShowQR] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${profileData.name}
TITLE:${profileData.title}
TEL;TYPE=CELL:${profileData.phone}
EMAIL:${profileData.email}
URL:${profileData.website}
ADR:;;${profileData.location}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${profileData.name.replace(' ', '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code-canvas') as HTMLCanvasElement;
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = `${profileData.name.replace(' ', '_')}_QR.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex justify-center items-start p-4 sm:p-8 font-sans overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md glass rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="relative pt-12 pb-8 flex flex-col items-center text-center px-6">
          <div className="relative mb-6">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border-2 border-dashed border-neon-cyan/30"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dotted border-neon-cyan/20"
            />
            <div className="absolute inset-0 rounded-full neon-glow animate-pulse" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-cyan/50 z-20"
            />
            <img 
              src={profileData.profilePic} 
              alt={profileData.name}
              className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-display font-bold text-white mb-1 tracking-tight"
          >
            {profileData.name}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-neon-cyan font-medium tracking-wide uppercase text-xs neon-text"
          >
            {profileData.title}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="px-6 mb-8">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSaveContact}
            className="w-full bg-neon-cyan text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 mb-4 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all"
          >
            <Download className="w-5 h-5" />
            Save Contact
          </motion.button>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigator.share?.({
                  title: profileData.name,
                  text: profileData.title,
                  url: window.location.href
                }).catch(() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                });
              }}
              className="glass border-white/10 hover:border-neon-cyan/30 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-gray-300"
            >
              <Share2 className="w-4 h-4 text-neon-cyan" />
              Share
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowQR(true)}
              className="glass border-white/10 hover:border-neon-cyan/30 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-gray-300"
            >
              <QrCode className="w-4 h-4 text-neon-cyan" />
              QR Code
            </motion.button>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <Phone />, label: 'Call', href: `tel:${profileData.phone}` },
              { icon: <Mail />, label: 'Email', href: `mailto:${profileData.email}` },
              { icon: <MessageCircle />, label: 'WhatsApp', href: `https://wa.me/${profileData.whatsapp.replace(/\D/g, '')}` },
            ].map((action, idx) => (
              <motion.a
                key={idx}
                href={action.href}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-neon-cyan/50 transition-colors"
              >
                <div className="text-neon-cyan">{action.icon}</div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{action.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="px-6 mb-8">
          <motion.h3 
            variants={itemVariants}
            className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-4 ml-1"
          >
            Connect with me
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {profileData.socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Information List */}
        <motion.div variants={itemVariants} className="px-6 mb-8 space-y-3">
          {[
            { icon: <Phone className="w-4 h-4" />, value: profileData.phone, label: 'Mobile', href: `tel:${profileData.phone}` },
            { icon: <Mail className="w-4 h-4" />, value: profileData.email, label: 'Work Email', href: `mailto:${profileData.email}` },
            { icon: <Globe className="w-4 h-4" />, value: profileData.website, label: 'Website', href: `https://${profileData.website}` },
          ].map((info, idx) => (
            <motion.a 
              key={idx} 
              href={info.href}
              variants={itemVariants}
              target={info.label === 'Website' ? "_blank" : undefined}
              rel={info.label === 'Website' ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                {info.icon}
              </div>
              <div>
                <motion.p 
                  variants={itemVariants}
                  className="text-[10px] text-gray-500 uppercase font-bold tracking-widest"
                >
                  {info.label}
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-sm text-gray-200 font-medium"
                >
                  {info.value}
                </motion.p>
              </div>
            </motion.a>
          ))}

          {/* Location Card with Mini-map */}
          <motion.a 
            href={profileData.mapLink}
            variants={itemVariants}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass rounded-2xl overflow-hidden block cursor-pointer hover:bg-white/5 transition-colors"
          >
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <motion.p 
                  variants={itemVariants}
                  className="text-[10px] text-gray-500 uppercase font-bold tracking-widest"
                >
                  Office Location
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-sm text-gray-200 font-medium"
                >
                  {profileData.location}
                </motion.p>
              </div>
            </div>
            <div className="h-32 w-full bg-gray-900/50 pointer-events-none">
              <iframe 
                src={profileData.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="p-8 bg-white/5 border-t border-white/5 text-center">
          <motion.p 
            variants={itemVariants}
            className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase"
          >
            © 2025 SUJON AHMED . All Rights Reserved.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass p-8 rounded-[2rem] max-w-xs w-full flex flex-col items-center relative"
            >
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-xl font-display font-bold mb-6 text-white">Share Card</h3>
              <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <QRCodeCanvas 
                  id="qr-code-canvas"
                  value={window.location.href} 
                  size={200}
                  fgColor="#000000"
                  bgColor="#ffffff"
                  level="H"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <button 
                  onClick={downloadQRCode}
                  className="w-full py-3 rounded-xl bg-neon-cyan text-black font-bold text-sm hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download QR
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
