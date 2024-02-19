import Card from "./Card";

export default function TeammateCard({
  occupation,
  skills,
}: {
  occupation: string;
  skills: [string, string][];
}) {
  return (
    <Card options={{ width: "small", height: "large" }}>
      <div className="flex justify-center items-center">
        <img src="https://via.placeholder.com/150" alt="teammate" className="w-25 h-25 " />
      </div>
      <div className="h-6 text-blue-500 bg-blue-100 text-sm flex justify-center items-center">
        {occupation}
      </div>
      {skills.map(([skill1, skill2]) => (
        <div className="flex gap-2">
          <Button content={skill1} />
          <Button content={skill2} />
        </div>
      ))}
    </Card>
  );
}

function Button({ content }: { content: string }) {
  return (
    <div className="bg-black h-6 flex justify-center items-center rounded-2xl text-white grow  text-xs">
      {content}
    </div>
  );
}
