import { Card, Input, Button, Typography, } from "@material-tailwind/react";
   
function ContactForm() {
    return (
       <Card className="max-w-md mx-auto mt-6 mb- p-4 w-1/3 flex flex-col justify-center sm:w-full bg-customCoolgray">
            <Typography className=" text-customCobalt text-2xl">
            Contact me
            </Typography>
            <Typography className="mt-1 font-normal text-customCobalt">
            Nice to meet you! Please enter your details.
            </Typography>
            <form className="mt-2 mb-1 ">
                <div className="mb-1 flex flex-col gap-2">
                    <Typography variant="h8" className="-mb-2 text-customCobalt">
                    Your Name
                    </Typography>
                    <Input
                    size="md"
                    placeholder="Name"
                    className=" bg-customCobalt text-bg-customWhite text-center border-none rounded "
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h8"className="-mb-3 text-customCobalt">
                    Your Email
                    </Typography>
                    <Input
                    size="md"
                    placeholder="name@mail.com"
                    className="bg-customCobalt text-bg-customWhite text-center border-none rounded"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                    <Typography variant="h8" className="-mb-2 text-customCobalt">
                    Message
                    </Typography>
                    <Input
                    type="text"
                    size="xl"
                    placeholder="lorem ipsum...."
                    className=" bg-customCobalt text-bg-customWhite text-center border-none rounded h-12"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    />
                </div>
                        
                <Button className="mt-6 bg-customWhite text-customBlack p-2">
                    Submit
                </Button>
          
             </form>
        </Card>
    );
  }
export default ContactForm