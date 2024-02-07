import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
  params : {
    companionid: string;
  };
};


const CompanionIdPage = async ({
  params,
} : CompanionIdPageProps) => {

  const companion = await prismadb.companion.findUnique({
    where : {
      id : params.companionID
    }
  })

  return (  
    <div>
      <h1>CompanionIdPage</h1>
    </div>
  );
}
 
export default CompanionIdPage;
