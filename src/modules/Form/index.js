import { useState } from "react"; // Correct import for useState
import Button from "../../componenrs/Button";
import Input from "../../componenrs/input";

const Form = ({
    isSignInPage = false,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: '',
        }),
        email: '',
        password: '',
    });

    return (
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold">
          Welcome {isSignInPage && <span>Back</span>}
        </div>
        <div className="text-xl font-light mb-14">
          {isSignInPage ? 'Sign in to get explored' : 'Sign up to get started'}
        </div>
        <form className="flex flex-col items-center w-full" onSubmit={() => console.log('Submitted')}>
          {!isSignInPage && (
            <Input
              label="Full name"
              name="name"
              placeholder="Enter your full name"
              className="mb-6"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mb-6"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your Password"
            className="mb-14"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <div className="mt-10">
            <Button label={isSignInPage ? "Sign in":"Sign up"} className="w-1/2 mb-2"/>
          </div>
        </form>
        <div>
          {isSignInPage ? "Didn't have an account?" : "Already have an account?"}
          <span className="text-primary cursor-pointer underline">
            {isSignInPage ? 'Sign up' : 'Sign in'}
          </span>
        </div>
      </div>
    );
    
};

export default Form;
