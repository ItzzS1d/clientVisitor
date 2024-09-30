import { useContext, useEffect, useState } from "react";
import { getClients } from "../../apiClient";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../context/Authprovider";

const Home = () => {
  const [clientsData, setClientsData] = useState([]);
  const [loading, setLoading] = useState(1);
  const navigate = useNavigate();
  const { setAuthInfo } = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClients();
        if (data.error) {
          setAuthInfo({ user: "", isLoggedIn: false, error: "" });
        }
        if (data.length > 0) {
          setLoading(0);
        }
        // Add serial number to each client
        const transformedData = data.map((client, index) => ({
          ...client,
          serial: index + 1, // Adding 1 to index to start serial number from 1
        }));
        setClientsData(transformedData);
      } catch (error) {
        console.error("Error fetching clients:", error);

        // Handle errors if needed
      }
    };
    fetchData();
  }, [navigate]);

  const columns = [
    { name: "Serial No", selector: (row) => row.serial, sortable: true },
    {
      name: "Visitor Name",
      selector: (row) => `${row.firstName} ${row.lastName}`, // Correctly concatenates first and last names
      sortable: true,
    },
    { name: "Phone No.", selector: (row) => row.phone, sortable: true },
    { name: "Company", selector: (row) => row.company, sortable: true },
    {
      name: "Visiting Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "Visit Date",
      selector: (row) =>
        new Date(row.from).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      sortable: true,
    },
    {
      name: "Till",
      selector: (row) =>
        new Date(row.to).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      sortable: true,
    },
  ];

   
  return (
    <main className="max-w-screen-xl m-auto ">
      
      <div>
        <Link
          to={"/clientvisit"}
          
        >
          <button className="mt-16 border-2 border-blue-500 px-4 py-2 rounded-md font-semibold text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-150">
            Create Client Visit
          </button>
        </Link>
        <DataTable
          columns={columns.map((col) => ({
            ...col,
            cell: (row) => (
              <div className="font-semibold">{col.selector(row)}</div>
            ),
          }))}
          data={clientsData}
          highlightOnHover
          theme="solarized"
          striped={true}
          className="mt-10 border-2"
        />
      </div>
    </main>
  );
};

export default Home;
