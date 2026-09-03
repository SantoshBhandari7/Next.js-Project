import DashBoardPage from "@/components/admin/dashboard/page";
const AdminDashboard = () => {
  return (
    <main className="min-h-screen w-full bg-gary-100 px-3 py-5 sm:px-5 sm:py-7 lg:px-8">
      <section className="w-full min-w-0">
        {/* Dashboard heading */}
        <div className="mb-5">
          <h1 className="text-2xl font-bold tracking-wide text-gray-700 sm:text-3xl">
            Good morning, Admin
          </h1>

          <p className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">
            Here's what's happening with your store today
          </p>
        </div>
        <DashBoardPage />
      </section>
    </main>
  );
};

export default AdminDashboard;
