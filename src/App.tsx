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
  QrCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeCanvas } from 'qrcode.react';

const profileData = {
  name: "SUJON AHMED",
  title: "Professional Digital Marketer | YouTube Expert | Google Ads | Facebook Ads | Social Media Manager",
  profilePic: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuWIpN32bsFeRZWhSELsiBlsJivUHXWALFzsQRnFf_RKfts9PCfGyswITDTIsPqKtX4aEhMFRnYTZGV3cN0szWppYMV_5_fbADC_X3_-W3e4mouuBP4x2FGBxiH3hvVZIps-bXiQNVytdYc__ff-r3spXnPEqi1wIgSzrwAYqOgyvWDrLR6-o3BGet62JG/s320/IMG_20251010_094707_658.jpg",
  phone: "+8801740027957",
  whatsapp: "+8801995620916",
  email: "bdsujonndm@gmail.com",
  website: "dmsujonbd.vercel.app",
  location: "Ulipur, Kurigram, Rangpur Division, Bangladesh",
  mapLink: "https://maps.google.com/?q=Ulipur,Kurigram,Bangladesh",
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${profileData.name}\nTITLE:${profileData.title}\nTEL;TYPE=CELL:${profileData.phone}\nEMAIL:${profileData.email}\nURL:${profileData.website}\nADR:;;${profileData.location}\nEND:VCARD`;
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
    const canvas = document.getElementById('qr-code-canvas');
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
      {/* Background Decor */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md glass rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10"
      >
        {/* Profile Info */}
        <motion.div variants={itemVariants} className="relative pt-12 pb-8 flex flex-col items-center text-center px-6">
          <div className="relative mb-6">
            {/* Rotate logic slow kora holo lag komanor jonno */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
              className="absolute -inset-2 rounded-full border-2 border-dashed border-neon-cyan/20" 
            />
            <img src={profileData.profilePic} alt={profileData.name} className="w-32 h-32 rounded-full border-2 border-white/10 relative z-10 object-cover" />
          </div>
          <motion.h1 variants={itemVariants} className="text-3xl font-display font-bold text-white mb-1 tracking-tight">
            {profileData.name}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-neon-cyan font-medium tracking-wide uppercase text-[10px] opacity-80 max-w-[80%] mx-auto leading-relaxed">
            {profileData.title}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="px-6 mb-8">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={handleSaveContact}
            className="w-full bg-neon-cyan text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 mb-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
          >
            <Download className="w-5 h-5" /> Save Contact
          </motion.button>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <motion.button onClick={() => setShowQR(true)} className="glass border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-gray-300">
              <QrCode className="w-4 h-4 text-neon-cyan" /> QR Code
            </motion.button>
            <motion.button 
              onClick={() => {
                navigator.share?.({ title: profileData.name, url: window.location.href }).catch(() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Copied!');
                });
              }}
              className="glass border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-gray-300"
            >
              <Share2 className="w-4 h-4 text-neon-cyan" /> Share
            </motion.button>
          </div>
        </motion.div>

        {/* Social Media Links (Re-added) */}
        <motion.div variants={itemVariants} className="px-6 mb-8">
          <h3 className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-4 ml-1">Connect with me</h3>
          <div className="flex flex-wrap gap-3">
            {profileData.socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-300 hover:text-neon-cyan transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info List */}
        <motion.div variants={itemVariants} className="px-6 mb-8 space-y-3">
          {[
            { icon: <Phone className="w-4 h-4" />, value: profileData.phone, label: 'Mobile', href: `tel:${profileData.phone}` },
            { icon: <Mail className="w-4 h-4" />, value: profileData.email, label: 'Email', href: `mailto:${profileData.email}` },
            { icon: <Globe className="w-4 h-4" />, value: profileData.website, label: 'Website', href: `https://${profileData.website}` },
          ].map((info, idx) => (
            <motion.a key={idx} href={info.href} whileTap={{ scale: 0.98 }} className="glass rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                {info.icon}
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{info.label}</p>
                <p className="text-sm text-gray-200 font-medium">{info.value}</p>
              </div>
            </motion.a>
          ))}

          {/* Location Card */}
          <motion.a 
            href={profileData.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="glass rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Office Location</p>
              <p className="text-sm text-gray-200 font-medium">{profileData.location}</p>
            </div>
            <ExternalLink className="w-3 h-3 text-gray-600" />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <div className="p-8 bg-white/5 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            © 2026 {profileData.name} . All Rights Reserved.
          </p>
        </div>
      </motion.div>

      {/* QR Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="glass p-8 rounded-[2rem] max-w-xs w-full flex flex-col items-center relative">
              <button onClick={() => setShowQR(false)} className="absolute top-4 right-4 text-gray-500"><X /></button>
              <div className="bg-white p-4 rounded-2xl mb-6 shadow-2xl">
                <QRCodeCanvas id="qr-code-canvas" value={window.location.href} size={180} />
              </div>
              <button onClick={downloadQRCode} className="w-full py-3 rounded-xl bg-neon-cyan text-black font-bold flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download QR
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
