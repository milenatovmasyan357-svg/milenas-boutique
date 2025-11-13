import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Հաղորդագրությունը ուղարկված է։ Մենք շուտով կպատասխանենք։");
  };

  return (
    <div className="min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light mb-4">Կապ մեզ հետ</h1>
            <p className="text-muted-foreground">
              Մենք ուրախ կլինենք լսել Ձեզնից։ Ուղարկեք մեզ հաղորդագրություն։
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6">Կապ հաստատեք մեզ հետ</h2>
                <p className="text-muted-foreground mb-8">
                  Այցելեք մեր խանութ կամ կապ հաստատեք այս ուղիներով։
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Խանութի հասցե</h3>
                    <p className="text-muted-foreground">
                      Տերյան 105<br />
                      Երևան, Հայաստան
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Հեռախոս</h3>
                    <p className="text-muted-foreground">+374 96 220 983</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Էլ․ փոստ</h3>
                    <p className="text-muted-foreground">
                      tovmasyanmilena2025@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Աշխատանքային ժամեր</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <div className="flex justify-between">
                    <span>Երկուշաբթի - Ուրբաթ</span>
                    <span>10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Շաբաթ</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Կիրակի</span>
                    <span>Փակ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border border-border p-6 bg-card">
              <h2 className="text-2xl font-light mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" required />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input id="contact-subject" required />
                </div>
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>
                <Button type="submit" className="w-full btn-primary">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
