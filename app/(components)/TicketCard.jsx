import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  const formartTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formatedDate = date.toLocaleString("en-us", options);

    return formatedDate;
  };

  return (
    <div className="flex flex-col bg-[#47566a] hover:bg-[#4f5e74] rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket?.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="text-xl">{ticket.title}</h4>
        <hr className="h-px border-0 bg-[#2b3441] mb-2" />
        <p className="whitespace-pre-wrap text-sm text-[#f1f3f5];">
          {ticket.description}
        </p>

        <div className="flex-grow"></div>
        <div className="flex pt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1 text-[#f1f3f5];">
              {formartTimestamp(ticket.createdAt)}
            </p>
            <ProgressDisplay progress={ticket.progress} />
          </div>

          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
