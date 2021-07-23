import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { DocsLink } from 'src/reusable';

const Compra = () => {

    const [collapsed, setCollapsed] = React.useState(true)
    const [showElements, setShowElements] = React.useState(true)

    return (
        <>
            <CRow>
                <CCol xs="12">
                    <CFade timeout={300} in={showElements} unmountOnExit={true}>
                        <CCard>
                            <CCardHeader>
                                Compra
                            </CCardHeader>
                            <CCollapse show={collapsed} timeout={1000}>
                                <CCardBody>
                                    <CForm className="form-horizontal">
                                        <CFormGroup>
                                            <CLabel htmlFor="articulo">Artículo</CLabel>
                                            <CSelect custom name="articulo" id="articulo">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </CSelect>
                                            <p className="help-block">Selecciona el artículo a comprar</p>
                                        </CFormGroup>
                                        <CFormGroup>
                                            <CLabel htmlFor="cantidad">Cantidad</CLabel>
                                            <CSelect custom name="cantidad" id="cantidad">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </CSelect>
                                            <p className="help-block">Selecciona la cantidad</p>
                                        </CFormGroup>
                                        <CFormGroup>
                                            <CLabel htmlFor="precio">Precio</CLabel>
                                            <div className="controls">
                                                <CInputGroup className="input-prepend">
                                                    <CInputGroupPrepend>
                                                        <CInputGroupText>$</CInputGroupText>
                                                    </CInputGroupPrepend>
                                                    <CInput id="precio" size="16" type="text" />
                                                </CInputGroup>
                                            </div>
                                        </CFormGroup>
                                        <div className="form-actions">
                                            <CButton type="submit" color="primary">Guardar</CButton>
                                            <CButton color="secondary">Cancelar</CButton>
                                        </div>
                                    </CForm>
                                </CCardBody>
                            </CCollapse>
                        </CCard>
                    </CFade>
                </CCol>
            </CRow>
        </>
    );
}

export default Compra;
