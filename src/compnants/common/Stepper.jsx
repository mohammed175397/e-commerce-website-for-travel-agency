export default function Stepper({ currentStep = 1 }) {
  const STEPS = [
    { id: 1, label: "Booking Details" },
    { id: 2, label: "Your Details" },
    { id: 3, label: "Payment" },
  ];

  return (
    <div className="flex justify-center ">
      <div className="relative">
        {/* base gray line */}
        <div className="absolute left-0 right-0 top-3.5 h-0.5 bg-gray-300" />
        {/* colored progress line */}
        <div
          className="absolute left-0 top-3.5 h-0.5 bg-orange-500 transition-all"
          style={{
            width:
              currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
          }}
        />

        {/* circles */}
        <div className="relative flex items-center justify-between">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            return (
              <div key={step.id} className="z-10">
                <div
                  className={[
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition",
                    isActive
                      ? "bg-orange-500 text-white"
                      : isCompleted
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-500",
                  ].join(" ")}
                >
                  {step.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* labels */}
        <div className="mt-2 grid grid-cols-3 text-sm">
          {STEPS.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div
                key={step.id}
                className={[
                  "font-medium",
                  step.id === 1
                    ? "text-left"
                    : step.id === 2
                    ? "text-center"
                    : "text-right",
                  isActive
                    ? "text-orange-500"
                    : isCompleted
                    ? "text-orange-5 00"
                    : "text-gray-400",
                ].join(" ")}
              >
                {step.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
