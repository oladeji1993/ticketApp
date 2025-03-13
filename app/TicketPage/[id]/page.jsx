import TickectForm from "@/app/(components)/TickectForm";

const getTicketById = async (id) => {
  const res = await fetch(`/api/Tickets/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket details");
  } else {
    return res.json();
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = await params?.id === "new" ? false : true;

  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicketData;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TickectForm ticket={updateTicketData} />;
};

export default TicketPage;
