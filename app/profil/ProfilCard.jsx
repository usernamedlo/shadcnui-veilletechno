import { Card } from "@/components/ui/card";

const ProfilCard = ({ userSession }) => {

  return (
    <Card className="rounded-lg border-2">
      <div className="flex flex-col items-center justify-center my-10">
        <img
          className="w-32 h-32 rounded-full"
          src={userSession?.image || "/img/placeholder.jpg"}
          alt="profil"
        />
        <h1 className="mt-4 text-xl font-bold">{userSession?.name || "John Doe"}</h1>
      </div>
      <div className="flex items-center justify-center mt-4">

      </div>
    </Card>
  );
};

export default ProfilCard;
