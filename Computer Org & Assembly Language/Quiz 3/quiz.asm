section .text
    global _start

_start:
    mov eax, 1 ; Store result temporarily in eax register
    mov ecx, 6 ; Factorial to be calculated 

    cmp ecx, -1 ; Catch for domain errors
    jle domain_error

    factorial:
    cmp ecx, 1
    jle exit ; Exit if ecx is less than or equal to 1

    imul eax, ecx ; Multiply eax by current ecx value 
    loop factorial ; Decrease ecx
    
    exit:
    mov [result], eax ; Store final result in an uninitialized variable
    mov eax, 1 ; Sys_exit
    mov ebx, 0
    int 0x80

    domain_error:
    mov eax, 4 ; Sys_write
    mov ebx, 1
    mov ecx, error ; Print 'undefined'
    mov edx, 10
    int 0x80 

    mov eax, 1 ; Sys_exit
    mov ebx, 1 ; Exit with error code
    int 0x80

    
segment .bss
    result resd 4

segment .data
    error db 'Undefined', 10

