import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

interface Student {
  _id: string;
  fullName: string;
  faculty: string;
  department: string;
  university: string;
  whatsappNumber: string;
  email: string;
  createdAt?: string;
}

interface StudentsTableProps {
  students: Student[];
}

const StudentsTable = ({ students }: StudentsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search by name, email, faculty, department, or university..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Full Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Faculty</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">University</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">WhatsApp</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                    No students found
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student._id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{student.fullName}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{student.faculty}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{student.department}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{student.university}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{student.whatsappNumber}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{student.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="text-sm text-muted-foreground">
        Showing {filteredStudents.length} of {students.length} students
      </div>
    </div>
  );
};

export default StudentsTable;
