import DashboardCard from "@/components/admin/dashboard/card/card";
import ProductDetails from "@/components/admin/dashboard/product/products";
import Button from "@/components/common/ui/button";
import Link from "next/link";

const Productpage = () => {
  return (
    <main className="min-h-screen w-full bg-gray-300 px-6 py-7">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-wide text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">Manage your products</p>
        </div>

        <div className="flex gap-5">
          <div className="w-30">
            <Link href={"/admin/products/add-new"}>
              <Button type="button" label="+ Add Product" />
            </Link>
          </div>
          <div className="w-33">
            <Link href={"/admin/products/update"}>
              <Button type="submit" label="Update Product" />
            </Link>
          </div>
        </div>
      </section>

      <section className=" flex  gap-6">
        <DashboardCard title="Total Products" value={55} />
        <DashboardCard title="In Stock" value={23} />
        <DashboardCard title="Low Stock" value={8} />
        <DashboardCard title="Out of Stock" value={3} />
      </section>

      <div className="mt-6 ">
        <ProductDetails />
      </div>
    </main>
  );
};

export default Productpage;
