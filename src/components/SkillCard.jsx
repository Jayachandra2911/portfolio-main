import { Card, CardContent } from "@/components/ui/card";

const SkillCard = ({ name, image }) => {
  return (
    <Card className="min-w-[250px] h-[80px] flex items-center justify-center px-4 py-2 shadow bg-background text-foreground hover:scale-105 transition duration-300">
      <CardContent className="flex items-center gap-3 p-0">
        <img src={image} alt={name} className="w-10 h-10" />
        <span className="text-xl font-medium">{name}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
