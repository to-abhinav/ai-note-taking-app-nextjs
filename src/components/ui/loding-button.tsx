import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

type LoadingButtonProps = {
    loading: boolean;
} & ButtonProps;

export default function LoadingButton({
    loading,
    children,
    ...props
}:LoadingButtonProps){
    return (
        <Button {...props} disabled={props.disabled || loading}>
            {loading && <Loader2 className="h-4 mr-2 w-4 animate-spin"/>}
            {children}
        </Button>
    )    
}