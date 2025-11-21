import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

export function SkillCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="grid place-items-center">
          <Image src={icon} alt={title} width={192} height={192} className="w-64 h-72 object-cover"/>
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
          {title}
        </Typography>
        <Typography className="px-8 font-normal !text-gray-700">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
