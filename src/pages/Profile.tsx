import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, updateProfile } = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth?redirect=/profile");
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileData);
  };

  // Mock order history
  const orderHistory = [
    {
      id: 1,
      date: "2024-01-15",
      total: 249.97,
      status: "Delivered",
      items: 3,
    },
    {
      id: 2,
      date: "2024-01-10",
      total: 129.99,
      status: "Shipped",
      items: 1,
    },
    {
      id: 3,
      date: "2024-01-05",
      total: 399.96,
      status: "Processing",
      items: 4,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-light">Իմ էջը</h1>
            <Button variant="outline" onClick={logout}>
              Ելք
            </Button>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Անձնական տվյալներ</TabsTrigger>
              <TabsTrigger value="orders">Պատվերների պատմություն</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="border border-border p-6 bg-card">
                <h2 className="text-xl font-light mb-6">Անձնական տվյալներ</h2>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Անուն Ազգանուն</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) =>
                        setProfileData({ ...profileData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Էլ․ փոստ</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({ ...profileData, email: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Հեռախոս</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({ ...profileData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Հասցե</Label>
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) =>
                        setProfileData({ ...profileData, address: e.target.value })
                      }
                    />
                  </div>
                  <Button type="submit" className="btn-primary">
                    Թարմացնել էջը
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="border border-border p-6 bg-card"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-medium">Պատվեր #{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('hy-AM')}
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs bg-muted rounded-full">
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {order.items} {order.items === 1 ? "ապրանք" : "ապրանք"}
                        </p>
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Տեսնել մանրամասները
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
