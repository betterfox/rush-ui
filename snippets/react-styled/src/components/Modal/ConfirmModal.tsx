import React, { createContext, useState, useContext, useEffect } from 'react'
import { css } from '@emotion/react'
import tw from 'twin.macro';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

interface ConfirmDialogComponentProps {
    open: boolean,
    title?: string | null,
    message?: string | null,
    onConfirm?: any,
    onDismiss?: any
}

const ConfirmDialogComponent = ({ open, title, message, onConfirm, onDismiss }: ConfirmDialogComponentProps) => {

    return (
        <Dialog className="app-modal" open={open}>
            <div className="app-modal-content">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-gray-700 mb-1">
                        {title}
                    </h3>
                    <div className="text-sm text-gray-500">
                        {message}
                    </div>
                </div>
            </div>
            <div className="app-modal-footer">
                <Button className="btn-cancel" onClick={onDismiss} color="primary">
                    Cancel
                </Button>
                <Button className="btn-confirm" onClick={onConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
            </div>
        </Dialog>
    )
};

export const ConfirmDialog = ConfirmDialogComponent;
export interface ConfirmDialogConfig {
    title?: string;
    message?: string;
    actionCallback?: any;
}

const ConfirmDialogContext = React.createContext({});

interface ConfirmDialogProviderProps {
    children: React.ReactNode
}

const ConfirmDialogProvider = ({ children }: ConfirmDialogProviderProps) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogConfig, setDialogConfig] = React.useState({} as ConfirmDialogConfig);

    const openDialog = ({ title, message, actionCallback }: ConfirmDialogConfig) => {
        setDialogOpen(true);
        setDialogConfig({ title, message, actionCallback });
    };

    const resetDialog = () => {
        setDialogOpen(false);
        setDialogConfig({});
    };

    const onConfirm = () => {
        resetDialog();
        dialogConfig.actionCallback(true);
    };

    const onDismiss = () => {
        resetDialog();
        dialogConfig.actionCallback(false);
    };

    return (
        <ConfirmDialogContext.Provider value={{ openDialog }}>
            <ConfirmDialog
                open={dialogOpen}
                title={dialogConfig?.title}
                message={dialogConfig?.message}
                onConfirm={onConfirm}
                onDismiss={onDismiss}
            />
            {children}
        </ConfirmDialogContext.Provider>
    );
};

const useConfirmDialog = () => {
    const { openDialog } = React.useContext(ConfirmDialogContext as any);

    const getConfirm = ({ ...options }) =>
        new Promise((res) => {
            openDialog({ actionCallback: res, ...options });
        });

    return { getConfirm };
};

export default ConfirmDialog;
export { ConfirmDialogProvider, useConfirmDialog };