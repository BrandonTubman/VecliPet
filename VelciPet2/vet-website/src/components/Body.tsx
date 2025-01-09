export default function BodySection() {
    return (
      <section className="pt-16 bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Where Pets Feel at Home.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            VelciPet is committed to providing exceptional veterinary care with a focus on the well-being of your pets. Offering a range of services, from preventative care to emergency treatments, they ensure every pet receives personalized attention. The clinic is dedicated to convenience, with an online platform for easy appointment booking and information sharing. VelciPet strives to build lasting relationships with clients while ensuring the highest standard of care for all pets.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://media.istockphoto.com/id/1198387244/photo/red-dog-lies-on-a-white-background-japanese-dog-smiling.jpg?s=612x612&w=0&k=20&c=6ggN5lrLj_cEcF7CCLNvCxUmHlywAeVvVcdcJMRoH8E="
              alt="mockup"
            />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
          Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://ucdc98f5792759b150f2a6082d0f.previews.dropboxusercontent.com/p/thumb/ACiUTCses0s3YgQIF_XyJgEiqdwm8951DJhu_Klwap9zRRaphaCX5J-wMnJBNpCmccQVuqJfnXuPZcFA09H_jc6vHmswjZxJ5xqj-p_zDKkFljKml1qENpnMi6YCSmIFDWchsJ8ZiWR1vvGS0hRH01DSOq82vyPKEU5jKqa0VeMuslGxks2sWwOX5qIaIIg-0un3N9uBofh5EquXmbLs8rPvXW64h1Zl0s31HI2-O0Ma6Et6UvDykGmaGpu-Zx0pQJwT0P7mZV62X18UBqGtl8Gg2b_ymXF8Y8UTc_1H2xZjWCWsyovDmGuWsu0cCPPPwM1hCcez9NLl7qMf-vRv-aQe-809ZoruiRRolU-roVljophOKvjtPcTRevr66FQ0tba9XY4e8KcFWRiz6n8u1yILdXNb9vAPZcxsWlXoqUaJD-9LTTD1l7abm-cCavb2OnMjRTlh-oSZT7gDkqOFLyiiZAOCyFEjvSs-OW3cuOkveEDYdUazAiGufoWTHHCWG8AbOqYYOBNww4jxzkdIdJHDkX0E2CSpRml6jYKQNPfiCmCc-O95oQ27i8Tt8CPGoIDyq3JsO8EJeFG2lHUspNWy/p.jpeg"
              alt="Service 1"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Preventative Care
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            Our preventative care service focuses on keeping your pet healthy with regular check-ups, vaccinations, and wellness exams. We help detect potential issues early, ensuring a long and happy life for your pet.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://ucc3c68b51f987e2103efa0498b1.previews.dropboxusercontent.com/p/thumb/ACiz3mERq91C-xHX_0EH2vhqatNLQ43nSpbuqV19btVYt9uw_NhxxsHonnZ8_KT7CH2gA866TrgOJtWNoHhaW_OkMp9CBkf9Hze1OE6knC_w9pWhF6nV2plzneJoGHcu35aO9YhNl5AQAY5PumMfe8rWRX8_X9BOVw7u1Qy-LyjvLDEWsVtwZWBU7VXRhyH2VA9s9pS22-gkuX8lRgscl1cgu99LqIQXSdNHxsJm66CQxQiiIW40ZqgZo7ycSuo8PoHo-_4ViQDiphvUfkKMa4kfpbYv1PsIsnFNpcUhHmJVb8GXB7A476kIGx01aV9LtDXAOJgcgZBy81ABNqtrbUxD0qwl09GIcxX79-4wUeoFU21kiajeNxNVHTMZA0HDXNIPwhT9tdr2E6a0q4BYuupwbsTrEqksx0wchHU23VhhC1QV3VqtnruMGsrFwTGKIBJObOc0uYQZeSeGX72_cr9QVx151UEYsRRk6y9suxNgYF-zPf8Q4Nty86PELn4rYDsDjOpKHeAIrBSW69vPz1IW/p.jpeg"
              alt="Service 2"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Sugery
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            Our surgery service offers safe and professional care for pets needing surgical intervention. We use advanced techniques and equipment to ensure a smooth recovery and the best outcomes for your furry friend.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://ucd2770768bced5224e959d606df.previews.dropboxusercontent.com/p/thumb/ACgyFPjLaLimEPxpgMvSnX1j5IGkIr3lqx1Ru77-DudHkKwLkfekV914N5UHzGbB0x2cXoYSg-acQ2na8O0gG5xV0O35B57crCvNq6rP_E9gzL1clNeHmf48bIwHo-VyUeXpRS8_K472ChAgVOkmJruE6tr8ffGcrwDUlhL3j4F5TEntpWnCDSQfzVb80mfGbLzZ4gWj4GddvDFrzCeSno8xSFVN3R4lzLdP_rnEU0qtoM2ClR-pbuEyFuRBlMWhUOagnsZzBdQ1GKo7D5C3VrzdAswG3YVrRA55fdrCWxpXdBgH3bEdymsMP-D6DUSkYmD8skhmAlH3NhnwZctC_tbnAUt5LVW7AJ35I2HXU3Gw9Nqu2l19sYkzFWTHFGmjKdM520vo6rt63XHN5ihncOGjaxJXZTaTbr-gjRbFneEHTCEKPzsBi2-An7hu47RFeLlYg0ZNpJbWIlGqNr7fpYP0l7znfjqoBSDhidynButR84F29BcoV7May4LSlFEYykl3UnQQxn59QjcOhxmDpz_u/p.jpeg"
              alt="Service 3"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Emergency Services
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            Our emergency services provide immediate, compassionate care for pets in urgent need. With a dedicated team and state-of-the-art facilities, we ensure quick and effective treatment during critical situations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Person 1 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://media.istockphoto.com/id/1995860815/photo/vet-woman-holding-jack-russell-dog.jpg?s=612x612&w=0&k=20&c=AT1BIJV1LJfrQueGnAnNWCLM0mOoghnh6KluIBWs5Ek="
              alt="Person 1"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Dr. Jane Smith, Senior Veterinarian
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            Dr. Jane Smith is a highly experienced Senior Veterinarian with a passion for animal care and over 15 years of practice. She specializes in surgery and preventative medicine, dedicated to ensuring the health and well-being of every pet she treats.
            </p>
          </div>

          {/* Person 2 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://images.stockcake.com/public/e/4/9/e4999638-43ab-4749-90e1-2b9b9d5a363e_large/data-center-technician-stockcake.jpg"
              alt="Person 2"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              John Smith, Technician
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            John Smith is a skilled Veterinary Technician with a strong background in animal care and medical assistance. He works closely with the veterinary team to provide compassionate support and ensure the comfort of pets during their treatments.
            </p>
          </div>

          {/* Person 3 */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <img
              src="https://images.stockcake.com/public/2/7/c/27cb1f67-19de-4b31-ae83-a0b0909152dd_large/friendly-support-staff-stockcake.jpg"
              alt="Person 3"
              className="mb-4 rounded-md w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Jade Smith, Support Staff
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
            Jade Smith is a friendly and dedicated member of our support staff, always ready to assist with scheduling, client communication, and ensuring a smooth experience for pet owners. Her attention to detail and warm demeanor make her an invaluable part of our team.
            </p>
          </div>
        </div>
      </div>
      </section>
    );
  }
  