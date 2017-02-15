***Electrical Component Design:***Each electrical component is broken down to describe in detail exactly how it will perform its piece of processing.

**IR Sensors:** An IR sensor can measure the heat of an object as well as detects the motion.The main components used in ir sensor are  
IR LED: Infra-Red radiation is invisible to the human eye so the LED is used to detect these radiations
Photo-diode: A photo-diode is a type of diode which detects light.  
IC Op-Amp: We use it to compare two voltages, one is fixed and the other varies with an environmental parameter. If the parameter controlled voltage is higher than the fixed the voltage, then the IC should give one output, and if it is lower than the fixed voltage, then it should give another output. This makes our sensor digital.  
Variable Resistor: It is used to calibrate the IR sensor according to the environment.   
When IR LED emissions become incident on the photodiode, the photodiode’s resistance comes down to a finite value.If the voltage developed across the resistor is greater than the threshold set by us, the output of the IC will be high, else it will be low. When the emissions are absorbed by a black surface, the resistance of the photodiode becomes very high due to no incidence of IR emissions on it, and the output remains low. It is indicated with the help of LED.

**Colour Sensor:**The components used in this are attiny85, RGB led, LDR(Light Dependent Resistor), resistor, pcb.
Colour is nothing but different wavelengths of light that are reflected by objects. Each material will reflect a different combination of wavelengths, resulting in different colours. With led we send 3 different wavelengths to a surface (red, green and blue). The LDR measures how much of each wavelength is reflected and sets its resistance accordingly. The LDR is set up with a 10K resistor as a voltage divider. The resulting voltage for each wavelength is read by the ADC of the microcontroller and the results are 3 bytes, one for each colour.

**Temperature sensor:**The components used in this are diode in constant current, platinum resistance (very linear, use for reliability), thermistor(NTC or PTC ), Thermocouple (very low voltage, industry standard),IC like LM35 (temp to voltage), or AD590 (temp to current), and exotic indirect measurement via radiation or quartz crystal frequency variations.
A temperature sensor measures the hotness or coolness of an object. The sensor’s working base is the voltage that’s read across the diode. The temperature rises whenever the voltage increases. The sensor records any voltage drop between the transistor base and emitter. When the difference in voltage is amplified, the device generates an analogue signal that’s proportional to the temperature.

**Ultrasonic Sensor:**A special sonic transducer is used for the ultrasonic sensors, which allows for alternate transmission and reception of sound waves. The sonic waves emitted by the transducer are reflected by an object and received back in the transducer. After having emitted the sound waves, the ultrasonic sensor will switch to receive mode. The time elapsed between emitting and receiving is proportional to the distance of the object from the sensor.

**Motor Driver:**Major components in Motor Drivers are:-
- Controller: The controller can be a microprocessor or a micro-controller.
- Motor Driver IC: They are basically current amplifiers which accept the low current signal from the controller and convert it into a high current signal which helps to drive the motor.
- Motor: It is electric or mechanic device that can creates a motion.
- Power Supply Unit: Provides the required power to the motor drive.  
It works on the concept of H-bridge. H-bridge is a circuit which allows the voltage to be flown in either direction. As you know voltage need to change its direction for being able to rotate the motor in clockwise or anticlockwise direction, Hence H-bridge IC are ideal for driving a DC motor.In a single chip there are two h-Bridge circuit inside the IC which can rotate two dc motor independently. Due its size it is very much used in robotic application for controlling DC motors.

**Toradex board:**The Apalis T30 is a small form-factor Computer on Module based on the NVIDIA© Tegra 3 SoC. CPU offers an operational frequency up to 1.4 GHz. The module offers high performance and advanced graphic capabilities at optimal power consumption. The module also exposes wide range of high-speed and advanced interfaces. The integrated NVIDIA Graphics enables visually rich, smooth and fast user interfaces.The Apalis T30 targets a wide range of applications: Robotics,Medical Devices, Navigation, HMIs, Entertainment System, Gaming and many more.
