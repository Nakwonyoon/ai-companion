import prismadb  from "@/lib/prismadb";
import { CompanionForm } from "./components/companion-form";
import { Categories } from "@/components/categories";

interface CompanionIdPageProps {
  params : {
    companionId: string;
  };
};


const CompanionIdPage = async ({ params }: CompanionIdPageProps ) => {

const companion = await prismadb.companion.findFirst({
  where : {
    id : params.companionId
  }
});

  const categories = await prismadb.category.findMany();

  return (  
    <CompanionForm
    initialData={companion}
    categories={categories}
    />
    );
}
 
export default CompanionIdPage;
