import { studentResult } from "../database/studentsResult";
import ClassGroup from "./ClassDetail";

function TableHeader() {
  return (
    <thead>
      <tr className="border-b border-[#FFFFFF0D]">
        <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
          ID
        </th>
        <th className="p-5 text-sm md:text-xl font-semibold text-left">Name</th>
        <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
        <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
      </tr>
    </thead>
  );
}

export default function ResultsTable() {
  return (
    <table className="w-full">
      <TableHeader />
      <tbody>
        {studentResult.map((result) => (
          <ClassGroup classDetails={result} key={result.title} />
        ))}
      </tbody>
    </table>
  );
}