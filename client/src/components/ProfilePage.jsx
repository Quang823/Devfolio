import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Camera,
  Edit3,
  Save,
  X,
  MapPin,
  Briefcase,
  Link as LinkIcon,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Calendar,
  Shield,
  Sparkles,
  Code2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [profile, setProfile] = useState({
    fullname: "Do Minh Quang",
    email: "dominhquang@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Quang",
    bio: "Full-stack developer passionate about creating beautiful and functional web applications. Love to learn new technologies and share knowledge with the community.",
    location: "Ho Chi Minh City, Vietnam",
    jobTitle: "Full-stack Developer",
    company: "Tech Company",
    website: "https://dominhquang.dev",
    github: "dominhquang",
    linkedin: "dominhquang",
    twitter: "dominhquang",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Python",
    ],
    joinedDate: "January 2024",
    projectCount: 12,
    isVerified: true,
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [newSkill, setNewSkill] = useState("");

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setProfile({ ...editedProfile });
    setIsSaving(false);
    setSaveSuccess(true);
    setIsEditing(false);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleCancel = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !editedProfile.skills.includes(newSkill.trim())) {
      setEditedProfile({
        ...editedProfile,
        skills: [...editedProfile.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setEditedProfile({
      ...editedProfile,
      skills: editedProfile.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const socialLinks = [
    {
      key: "github",
      icon: Github,
      label: "GitHub",
      prefix: "https://github.com/",
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      prefix: "https://linkedin.com/in/",
    },
    {
      key: "twitter",
      icon: Twitter,
      label: "Twitter",
      prefix: "https://twitter.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-80 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="fixed top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Success notification */}
        <AnimatePresence>
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-medium">
                Profile updated successfully!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              My Profile
            </h1>
            <p className="text-muted-foreground">
              Manage your personal information and preferences
            </p>
          </div>

          {!isEditing ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </motion.button>
          ) : (
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCancel}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold"
              >
                <X className="w-4 h-4" />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold disabled:opacity-50"
              >
                {isSaving ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {isSaving ? "Saving..." : "Save Changes"}
              </motion.button>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Avatar & Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="glass rounded-2xl p-8 glow-box">
              {/* Avatar */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img
                  src={isEditing ? editedProfile.avatar : profile.avatar}
                  alt="Avatar"
                  className="w-full h-full rounded-2xl object-cover bg-secondary"
                />
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <Camera className="w-5 h-5 text-primary-foreground" />
                  </motion.button>
                )}
                {profile.isVerified && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Name & Title */}
              <div className="text-center mb-6">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {profile.fullname}
                </h2>
                <p className="text-primary font-medium">{profile.jobTitle}</p>
                {profile.company && (
                  <p className="text-muted-foreground text-sm">
                    at {profile.company}
                  </p>
                )}
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">
                    {profile.projectCount}
                  </div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">
                    {profile.skills.length}
                  </div>
                  <div className="text-xs text-muted-foreground">Skills</div>
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {profile.joinedDate}</span>
                </div>
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:underline"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{profile.website.replace("https://", "")}</span>
                  </a>
                )}
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3 mt-6 pt-6 border-t border-border">
                {socialLinks.map(({ key, icon: Icon, prefix }) => {
                  const value = profile[key];
                  if (!value) return null;
                  return (
                    <motion.a
                      key={key}
                      href={`${prefix}${value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right column - Detailed Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Basic Information */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Basic Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.fullname}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          fullname: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-secondary/30 rounded-xl text-foreground">
                      {profile.fullname}
                    </p>
                  )}
                </div>

                {/* Email (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    Email
                    <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">
                      Read-only
                    </span>
                  </label>
                  <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 rounded-xl text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{profile.email}</span>
                  </div>
                </div>

                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Job Title
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.jobTitle}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          jobTitle: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-secondary/30 rounded-xl text-foreground">
                      {profile.jobTitle}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Company
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.company}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          company: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-secondary/30 rounded-xl text-foreground">
                      {profile.company || "Not specified"}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedProfile.location}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <p className="px-4 py-3 bg-secondary/30 rounded-xl text-foreground">
                      {profile.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                About Me
              </h3>

              {isEditing ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) =>
                    setEditedProfile({ ...editedProfile, bio: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about yourself..."
                />
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  {profile.bio}
                </p>
              )}
            </div>

            {/* Skills */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                Skills & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {(isEditing ? editedProfile.skills : profile.skills).map(
                  (skill) => (
                    <motion.span
                      key={skill}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        isEditing
                          ? "bg-secondary text-secondary-foreground pr-2"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="w-5 h-5 rounded-full bg-destructive/20 hover:bg-destructive/40 flex items-center justify-center transition-colors"
                          >
                            <X className="w-3 h-3 text-destructive" />
                          </button>
                        )}
                      </span>
                    </motion.span>
                  )
                )}
              </div>

              {isEditing && (
                <div className="flex gap-3 mt-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addSkill()}
                    placeholder="Add a skill..."
                    className="flex-1 px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={addSkill}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
                  >
                    Add
                  </motion.button>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-primary" />
                Social Links
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Website */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={editedProfile.website}
                      onChange={(e) =>
                        setEditedProfile({
                          ...editedProfile,
                          website: e.target.value,
                        })
                      }
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  ) : (
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 bg-secondary/30 rounded-xl text-primary hover:underline"
                    >
                      {profile.website}
                    </a>
                  )}
                </div>

                {socialLinks.map(({ key, icon: Icon, label }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {label}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile[key]}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            [key]: e.target.value,
                          })
                        }
                        placeholder={`Your ${label} username`}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-secondary/30 rounded-xl text-foreground">
                        @{profile[key] || "Not set"}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
