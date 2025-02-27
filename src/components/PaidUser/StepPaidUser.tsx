export default function StepPaidUser() {
    const steps = ['Vehículo', 'Pago'];
    const activeSteps = [0, 1]; 

    return (
        <div className="flex justify-center mt-8"> 
            <div className="flex justify-between items-center w-full max-w-md"> 
                {steps.map((step, index) => (
                    <div key={step} className="flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                activeSteps.includes(index)
                                    ? 'bg-[#04843c] text-white'
                                    : 'bg-gray-200 text-gray-500'
                            }`}
                        >
                            {index + 1}
                        </div>
                        <p
                            className={`ml-2 ${
                                activeSteps.includes(index) ? 'text-[#04843c]' : 'text-gray-500'
                            }`}
                        >
                            {step}
                        </p>
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}