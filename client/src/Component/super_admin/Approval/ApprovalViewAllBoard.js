import * as Tabs from "@radix-ui/react-tabs";
import ApprovalAminity from "./approvalAmenities";
import ApprovalImage from "./approvalImages";
import ApprovalDocs from "./approvalDocs";

function ApprovalViewAllBoard() {
  const tabItems = [
    {
      name: "Amenities",
      element:<ApprovalAminity />,
    },
    {
      name: "Images",
      element: <ApprovalImage />,
    },
    {
      name: "Documents",
      element: <ApprovalDocs />,
    }
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mx-auto viewallboard"
      defaultValue="Images"
    >
      <Tabs.List
        className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
        aria-label="View Board"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 text-center viewallitem"
            value={item.name}
          >
            <div className="flex items-center gap-x-2 py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 justify-center group-active:bg-gray-100 font-medium">
              {item.name}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item.name}>
          {item.element}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default ApprovalViewAllBoard;