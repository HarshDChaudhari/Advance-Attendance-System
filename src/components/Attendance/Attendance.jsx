import React from 'react';

const Attendance = () => {
  // Sample checkbox data
  const checkboxes = [
    { id: 1, name: '210210116001' },
    { id: 2, name: '210210116002' },
    { id: 3, name: '210210116003' },
    { id: 4, name: '210210116004' },
    { id: 5, name: '210210116005' },
    // Add more checkbox objects as needed
  ];

  return (
    <>
    <div className="max-w-xl mx-auto p-5">
      <form>
        <div className="overflow-hidden border-b border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preasent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enrollment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {checkboxes.map((checkbox) => (
                  <tr key={checkbox.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        id={`checkbox${checkbox.id}`}
                        name={`checkbox${checkbox.id}`}
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{checkbox.name}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>

    </div>
    <div className="flex items-center justify-center m-5">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    </div>
              </>
  );
};

export default Attendance;
