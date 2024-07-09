section .macros
    %define SYS_EXIT 1          ;Sys_exit x86 instruction
    %define SYSCALL int 0x80    ;Enter kernel mode


    %macro EXIT 1               ;Exit program with user-specified code
        mov eax, SYS_EXIT
        mov ebx, %1 
        SYSCALL
    %endmacro

segment .bss
    X resd 1                    ;4 byte (32 bits) uninitialized 'x' variable

segment .data                   ;Define initialized variables as double words
    A dd 31415                
    B dd -2                
    C dd 999
    D dd 101010

section .text
    global _start

_start:
    ;; X = (A * B) + (C * D)
    mov eax, [A]              
    mov ebx, [B]                      

    imul eax, ebx ;; (A * B)

    mov ecx, [C]
    mov edx, [D]

    imul ecx, edx   ;; (C * D)         

    add eax, ecx ;; (A * B) + (C * D)

    mov [X], eax ;; X = (A * B) + (C * D)                        

    EXIT 0                      ;Exit with code 0
