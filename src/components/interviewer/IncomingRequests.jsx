import RequestCard from "./RequestCard";

export default function IncomingRequests({ requests, isProcessing, onAccept }) {
  return (
    <div className="space-y-6">
      <h3 className="font-['Unbounded'] text-sm font-black uppercase italic tracking-tight border-b-2 border-[#1A1A1A] pb-4">
        Incoming Requests
      </h3>
      {requests.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {requests.map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              isProcessing={isProcessing}
              onAccept={onAccept}
            />
          ))}
        </div>
      ) : (
        <p className="font-['DM_Mono'] text-xs italic text-neutral-400">
          Signal queue is empty.
        </p>
      )}
    </div>
  );
}
