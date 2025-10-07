import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import StudentsTable from "@/components/StudentsTable";
import { Loader2 } from "lucide-react";

const fetchStudents = async () => {
  const response = await fetch("https://admission-form-backend-4sz2.onrender.com/api/admissions");
  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }
  return response.json();
};

const Index = () => {
  const { data: students, isLoading, error } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Student Enrollments</h1>
          <p className="text-muted-foreground">View and manage all enrolled students</p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded">
            Error loading students. Please try again later.
          </div>
        )}

        {students && <StudentsTable students={students} />}
      </main>
    </div>
  );
};

export default Index;
