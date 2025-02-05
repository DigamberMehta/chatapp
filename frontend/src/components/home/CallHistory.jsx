import React from "react";
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";

const calls = [
  { id: 1, name: "John Doe", type: "incoming", time: "10:30 AM" },
  { id: 2, name: "Jane Smith", type: "outgoing", time: "9:15 AM" },
  { id: 3, name: "Alice Brown", type: "missed", time: "Yesterday" },
  { id: 4, name: "Bob Martin", type: "incoming", time: "2 Days Ago" },
];

const CallHistory = () => {
  return (
    <div className="w-96 h-screen bg-white shadow-lg p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Call History</h2>
      <div className="space-y-3">
        {calls.map((call) => (
          <div
            key={call.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <div>
              <p className="font-medium">{call.name}</p>
              <p className="text-sm text-gray-500">{call.time}</p>
            </div>
            <div>
              {call.type === "incoming" && <PhoneIncoming className="text-green-500" />}
              {call.type === "outgoing" && <PhoneOutgoing className="text-blue-500" />}
              {call.type === "missed" && <PhoneMissed className="text-red-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallHistory;
