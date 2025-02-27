
import { useForm, SubmitHandler } from "react-hook-form";
import PayPalButton from "./PaypalButton";

type FormValues = {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
};

export default function BodyPaidUser() {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Datos del formulario:", data);
        alert("Formulario enviado correctamente");
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100 font-[Montserrat] -mt-17">
            <div className="w-[90%] max-w-5xl bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">

                {/* Sección del formulario */}
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold text-[#04843c]">Proceso de pago</h1>
                    <h2 className="text-xl font-semibold text-[#04843c] mt-4 border-b-2 border-[#04843c] pb-2">
                        Datos del titular de la reserva
                    </h2>

                    {/* Formulario con validaciones */}
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                        <div className="flex gap-4">

                            <div className="w-1/2">
                                <label className="block text-[#04843c]">Nombre</label>
                                <input
                                    type="text"
                                    {...register("nombre", { required: "El nombre es obligatorio" })}
                                    className="w-full p-2 border rounded bg-gray-100 focus:outline-none" />
                                {errors.nombre && (<p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>)}
                            </div>

                            <div className="w-1/2">
                                <label className="block text-[#04843c]">Apellido</label>
                                <input
                                    type="text"
                                    {...register("apellido", { required: "El apellido es obligatorio" })}
                                    className="w-full p-2 border rounded bg-gray-100 focus:outline-none" />
                                {errors.apellido && (<p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>)}
                            </div>

                        </div>

                        <div>
                            <label className="block text-[#04843c]">Correo electrónico</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "El correo es obligatorio",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Correo electrónico no válido",
                                    },
                                })}
                                className="w-full p-2 border rounded bg-gray-100 focus:outline-none" />
                            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
                        </div>

                        <div>
                            <label className="block text-[#04843c]">Número de contacto</label>
                            <input
                                type="text"
                                {...register("telefono", {
                                    required: "El número de contacto es obligatorio",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "El número debe tener 10 dígitos",
                                    },
                                })}
                                className="w-full p-2 border rounded bg-gray-100 focus:outline-none"/>
                            {errors.telefono && (<p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>)}
                        </div>

                        {/* No estoy segura de poner esto de enviar*/}
                        {/* <button
                            type="submit"
                            className="w-full bg-[#04843c] text-white font-bold py-2 rounded-lg mt-4 hover:bg-[#03652e] transition-colors">
                            Enviar
                        </button> */}
                    </form>
                </div>


                <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

                {/* Reserva inf y boton de pago con paypal*/}
                <div className="w-full md:w-1/2 p-4 flex flex-col">
                    <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-2 rounded-lg h-full flex items-center">
                            <div className="w-40 aspect-[4/3]">
                                <img
                                    src="/images/transportes/van.jpg"
                                    alt="Van"
                                    className="rounded w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="space-y-2 text-[#04843c] w-2/3">
                            <h4 className="font-semibold">Punto de partida</h4>
                            <p>Aeropuerto de Cancún</p>

                            <h4 className="font-semibold">Punto de destino</h4>
                            <p>Aeropuerto de Cancún</p>

                            <h4 className="font-semibold">Fecha de reserva</h4>
                            <p>14 de enero de 2025</p>

                            <h4 className="font-semibold">Tipo de vehículo</h4>
                            <p>Van</p>

                            <h4 className="font-semibold">N° Pasajeros</h4>
                            <p>6</p>
                        </div>
                    </div>

                    {/* PayPal */}
                    <PayPalButton />

                    <p className="text-2xl font-bold text-[#04843c] mt-4 text-center">$240 MXN</p>
                </div>
            </div>
        </div>
    );
}