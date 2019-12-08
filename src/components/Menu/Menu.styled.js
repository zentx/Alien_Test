
import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryGreen};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    width: 400px;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: transform 0.3s ease-in-out;

    a{
        
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.5rem;
            text-align: center;
        }
    
        &:hover {
            color: ${({ theme }) => theme.primaryHover};
        }
    }
`;