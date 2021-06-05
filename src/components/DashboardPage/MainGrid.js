const MainGrid = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl border-b border-emerald-400 pb-2">
        Latest added products:
      </h1>
      <div class="grid grid-rows-4 grid-flow-col gap-4 mt-6 h-96">
        <div class="row-span-4  bg-white rounded p-4 shadow-md">1</div>
        <div class="row-span-2 col-span-2 bg-green-400 rounded p-4">2</div>
        <div class="row-span-2 col-span-2 bg-pink-400 rounded p-4">3</div>
      </div>
    </div>
  );
};

export default MainGrid;
