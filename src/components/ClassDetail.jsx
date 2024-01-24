function StudentDetails({ studentDetails }) {
  const { id, avatar, name, scores, percentage } = studentDetails;
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          {/* added an extra class (rounded-full) for runded image */}
          <img
            className="w-8 h-8 rounded-full"
            src={avatar}
            width={32}
            height={32}
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{scores}</td>
      <td className="p-5 text-sm md:text-xl text-center">{`${percentage} %`}</td>
    </tr>
  );
}

export default function ClassGroup({ classDetails }) {
  const { title = "", students = [] } = classDetails;
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan={4}>
          {title}
        </td>
      </tr>
      {students.map((student) => (
        <StudentDetails key={student.id} studentDetails={student} />
      ))}
    </>
  );
}
