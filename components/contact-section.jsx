'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [copiedItem, setCopiedItem] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'osafalisayed@gmail.com',
      copyValue: 'osafalisayed@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 8890530727',
      copyValue: '+918890530727'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: 'github.com/osafalisayed',
      copyValue: 'github.com/osafalisayed'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: '/in/osafalisayed',
      copyValue: 'linkedin.com/in/osafalisayed'
    }
  ];

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopiedItem(index);
        toast({
          title: "Copied to clipboard",
          description: `${value} has been copied to your clipboard.`,
          duration: 2000,
        });
        
        // Reset the copied state after 2 seconds
        setTimeout(() => {
          setCopiedItem(null);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
        toast({
          title: "Failed to copy",
          description: "Could not copy to clipboard. Please try again.",
          variant: "destructive",
          duration: 2000,
        });
      });
  };

  return (
    <section className="pt-20 pb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardContent className="p-6">
            <p className="text-lg mb-8">
              Feel free to reach out for collaborations, job opportunities, or just to say hello!
              I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleCopy(item.copyValue, index)}
                >
                  <div className="text-primary mr-4">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedItem === index ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}