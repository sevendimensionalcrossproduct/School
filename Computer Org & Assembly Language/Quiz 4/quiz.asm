section .data
    x dd 5
    y dd 0
    z dd -3

segment .bss
    result resd 1

section .text
    global _start

_start:
    ; Load variables
    mov eax, [x]
    mov ebx, [y]
    mov ecx, [z]


    ; Push arguments
    push ecx
    push ebx
    push eax

    call _sum ; Call the function

    mov eax, 1 ; Sys_exit
    mov ebx, 0 ; Exit code
    int 0x80
 
    _sum:
        ; Set up stack frame (allocate stack memory)
        push ebp ; Save base pointer
        mov ebp, esp ; Set to current stack pointer

        ; Load arguments into registers
        mov eax, [ebp+8] ; x
        mov ebx, [ebp +12] ; y
        mov ecx, [ebp +16] ; z
           
        ; Add the values
        add eax, ebx
        add eax, ecx
        
        ; Store result
        mov [result], eax
        
        leave ; Clean stack frame (free stack memory)
        ret ; Return to caller
